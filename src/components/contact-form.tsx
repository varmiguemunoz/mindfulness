"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  return (
    <div className="space-y-6 bg-[#313131] rounded-sm px-10 py-10">
      <form
        className="space-y-4"
        method="POST"
        action="https://formsubmit.co/miguelmunoz@bloomify.tech"
      >
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white">
            Phone
          </Label>
          <Input
            id="phone"
            type="text"
            name="phone"
            required
            placeholder="Enter your phone"
            className="text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-white">
            Message
          </Label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            rows={4}
            placeholder="Enter your message here..."
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-[#B38AD6] hover:bg-[#A56CC1]"
        >
          Send Message
        </Button>
      </form>
      <p className="text-center text-sm text-white">
        Go Back?{" "}
        <Link href="/" className="text-blue-500 hover:underline">
          Take me there!
        </Link>
      </p>
    </div>
  );
}
