"use client";

import React from "react";
import { toast } from "sonner";

import { savedNewLetters } from "@/utils/api";

export default function NewsLetter() {
  const handleSubscribeUser = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const fields = Object.fromEntries(
        new window.FormData(e.target as HTMLFormElement)
      );

      const { message } = await savedNewLetters(String(fields.email));

      toast.success(message);
    } catch (error: any) {
      toast.error("Error subscribe user");
      throw error;
    }
  };

  return (
    <div className="w-full">
      <span className="mb-3 text-sm font-semibold text-zinc-400">
        Newsletter
      </span>
      <p className="mb-4 text-sm text-zinc-500/80">
        Get exclusive content and updates
      </p>
      <form className="flex gap-2" onSubmit={handleSubscribeUser}>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          className="flex-1 rounded-lg bg-white px-3 py-2 text-sm text-white placeholder-zinc-500 outline-none ring-zinc-700 transition-shadow focus:ring-1"
        />
        <button
          type="submit"
          className="rounded-lg bg-lavender px-4 py-2 text-sm font-bold text-white hover:bg-lavender/80"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
