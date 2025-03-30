"use server";

import axios, { AxiosInstance } from "axios";
import { stripe } from "./stripe";
import { createClient } from "./supabase/server";

const baseURL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

const publicHttpClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
    apikey: API_KEY,
    Prefer: "count=exact", // Esto le dice a Supabase que cuente los elementos
  },
});

export const getDashboardData = async (
  currentPage: number = 1,
  itemsPerPage: number = 20
) => {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage - 1;

  try {
    const response = await publicHttpClient.get(
      `/rest/v1/dim_movies?select=*`,
      {
        headers: {
          range: `${start}-${end}`,
        },
      }
    );

    const total = response.headers["content-range"];
    const totalItems = total ? total.split("/")[1] : 0;
    const data = response.data;

    return { data, totalItems: parseInt(totalItems, 10) };
  } catch (error) {
    console.log(error);
    throw new Error("Error");
  }
};

export const getSearchData = async (
  searchTerm: string,
  currentPage: number = 1,
  itemsPerPage: number = 20
) => {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage - 1;
  try {
    const response = await publicHttpClient.get(
      "/rest/v1/dim_movies?select=*",
      {
        headers: {
          range: `${start}-${end}`,
        },
        params: {
          title: `ilike.%${searchTerm}%`,
        },
      }
    );
    const total = response.headers["content-range"];
    const totalItems = total ? total.split("/")[1] : 0;
    const data = response.data;
    return { data, totalItems: parseInt(totalItems, 10) };
  } catch (error) {
    console.log(error);
    throw new Error("Error");
  }
};

export const getChapters = async (seireId: number) => {
  try {
    const response = await publicHttpClient.get(
      `/rest/v1/dim_chapters?select=*`,
      {
        params: { id_movies: `eq.${seireId}` },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error");
  }
};

export const getStripePrices = async () => {
  const coupon = await stripe.coupons.retrieve(
    process.env.NEXT_PUBLIC_STRIPE_CUPPON_ID as string
  );

  const prices = await stripe.prices.list({
    product: process.env.NEXT_PUBLIC_STRIPE_PRODUCT_ID,
  });

  const price = prices.data[0].unit_amount || 0;
  const priceId = prices.data[0].id;
  const discountPercent = coupon.percent_off || 0;

  return { price, priceId, discountPercent };
};

export const savedNewLetters = async (email: string) => {
  const supabase = await createClient();

  const { error } = await supabase.from("subscriptions").insert([
    {
      email: email,
    },
  ]);

  if (error) {
    return { message: "Something went wrong, Please contact to support" };
  } else {
    return { message: "Thank you for your subscription 🙏🏻" };
  }
};

export const saveSubscription = async (sessionId: string) => {
  const supabase = await createClient();

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  const subscription = await stripe.subscriptions.retrieve(
    session.subscription as any
  );

  if (subscription) {
    await stripe.subscriptions.update(subscription.id, {
      cancel_at_period_end: true,
    });
    const subscription_id = subscription.id;
    const end_date = subscription.current_period_end
      ? new Date(subscription.current_period_end * 1000)
      : null;

    const { error } = await supabase.from("dim_subscription").upsert([
      {
        id_stripe: subscription_id,
        email: session.customer_email,
        end_date,
      },
    ]);

    if (error) {
      return { message: "Something went wrong, Please contact to support" };
    } else {
      return { message: "Payment Successfully Processed" };
    }
  }
};

export const getSuscriptionStatus = async (): Promise<{
  status: string;
  showDiscount?: boolean;
}> => {
  let status = "";
  let showDiscount = false;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  try {
    const { data, error } = await supabase
      .from("dim_subscription")
      .select("*")
      .eq("email", user?.email)
      .order("created_at", { ascending: false })
      .limit(1);

    if (!error) {
      const subscriptionId = data[0]?.id_stripe;

      if (subscriptionId) {
        const subscription =
          await stripe.subscriptions.retrieve(subscriptionId);

        status = subscription.status;

        if (subscription.canceled_at && status === "canceled") {
          const cancelAtDate = new Date(subscription.canceled_at * 1000);

          const currentDate = new Date();

          const diffInMilliseconds =
            currentDate.getTime() - cancelAtDate.getTime();

          const diffInMonths = diffInMilliseconds / (1000 * 60 * 60 * 24 * 30);

          const roundedMonths = Math.round(diffInMonths);

          if (roundedMonths >= 1) {
            showDiscount = true;
          }
        }
      } else {
        showDiscount = true;
      }
    }
    return { status, showDiscount };
  } catch (error) {
    return { status: `${error}` };
  }
};
