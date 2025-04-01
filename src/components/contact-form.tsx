"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  return (
    <div className="space-y-6 bg-lavender rounded-sm px-10 py-10">
      <form
        className="space-y-4"
        method="POST"
        action="https://formsubmit.co/miguelmunoz@bloomify.tech"
      >
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white font-bold">
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
          <Label htmlFor="email" className="text-white font-bold">
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
          <Label htmlFor="phone" className="text-white font-bold">
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
          <Label htmlFor="message" className="text-white font-bold">
            Message
          </Label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border border-white rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            rows={4}
            placeholder="Enter your message here..."
          />
        </div>
        <Button
          type="submit"
          className="w-full text-white font-bold bg-mintGreen hover:bg-baseGray"
        >
          Send Message
        </Button>
      </form>
      <p className="text-center text-sm text-white">
        Go Back?{" "}
        <Link href="/" className="text-white underline font-bold">
          Take me there!
        </Link>
      </p>
    </div>
  );
}
