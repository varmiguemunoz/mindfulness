"use client";

import { useState } from "react";

interface CheckoutButtonProps {
  priceId: string;
  discount?: boolean;
}

export default function CheckoutButton({
  priceId,
  discount,
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId, discount }),
      });

      const data = await response.json();
      window.location.href = data.url;

      // const { sessionId } = await response.json();
      // stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      {isLoading ? "Loading..." : "Subscribe"}
    </button>
  );
}
