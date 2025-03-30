// import { Stripe, loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";

// let stripePromise: Promise<Stripe | null>;

// export const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
//   }
//   return stripePromise;
// };

export const stripe = new Stripe(
  process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string
);
