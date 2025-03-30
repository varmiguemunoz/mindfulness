"use client";

import type React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

import CheckoutButton from "@/components/CheckoutButton";
import { getStripePrices } from "@/utils/api";

interface FeatureProps {
  fromDashboard?: boolean;
  priceId?: string;
  discount?: boolean;
}

export default function PricingSection({
  fromDashboard,
  priceId,
  discount,
}: FeatureProps) {
  const [price, setPrice] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { price, discountPercent } = await getStripePrices();

        setPrice(price / 100);
        setDiscountAmount(1 - discountPercent / 100);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      id="pricing"
      className="min-h-screen bg-[#0F0F0F] text-white px-4 py-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lightPurple font-medium mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Immerse yourself in Unlimited
            <br />
            Pleasure!
          </h2>
          <p className="text-[#D982CA] flex items-center justify-center gap-2">
            <span className="inline-block">🎉</span>
            At the Best price of the year!
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="rounded-xl bg-zinc-900 p-6 border border-[#A65B99] relative">
            <div className="absolute -top-3 right-6 bg-[#F2CEF0] text-black text-sm font-semibold px-3 py-1 rounded-full">
              FREE
            </div>
            <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <div>
                  <span
                    className={`text-4xl font-bold ${discount && "line-through"}`}
                  >
                    ${price}
                  </span>
                  <span className="text-zinc-500">USD</span>
                </div>

                {discount && (
                  <div className="ml-4">
                    <span className="text-4xl font-bold">
                      ${price * discountAmount}
                    </span>
                    <span className="text-zinc-500">USD</span>
                  </div>
                )}
              </div>
              <p className="text-lightGray text-sm mt-2">
                Enjoy unlimited access
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <Feature>Unrestricted content</Feature>
              <Feature>No ads</Feature>
              <Feature>Exclusive content</Feature>
              <Feature>+ 1000 hentai titles</Feature>
              <Feature> Multi-device support</Feature>
              <Feature> Full HD and 4K streaming</Feature>
            </div>

            {fromDashboard ? (
              <CheckoutButton priceId={priceId || ""} discount={discount} />
            ) : (
              <Link
                href={"/login"}
                className="w-full bg-[#D982CA] hover:bg-[#F2CEF0] transition-colors text-black font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2"
              >
                Get Started
              </Link>
            )}
            <p className="text-center text-zinc-500 text-sm mt-4">
              Thousands of hentai lovers are see the platform!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Feature({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <Check className="w-5 h-5 text-[#F2CEF0] flex-shrink-0" />
      <span className="text-zinc-300">{children}</span>
    </div>
  );
}
