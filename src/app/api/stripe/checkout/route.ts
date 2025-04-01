import { NextResponse } from "next/server";
import { stripe } from "@/utils/stripe";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  const { priceId, discount } = await req.json();
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.headers.get("origin")}/payment/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/payment/error`,
      customer_email: user?.email,
      discounts: discount
        ? [{ coupon: process.env.NEXT_PUBLIC_STRIPE_CUPPON_ID }]
        : [],
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (err: any) {
    console.error("Error creating checkout session:", err);
    return NextResponse.json(
      { error: { message: err.message } },
      { status: 500 }
    );
  }
}
