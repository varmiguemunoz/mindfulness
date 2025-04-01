"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClient();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/register/success`,
      },
    });
    if (error) {
      toast.error("Error registering");
      throw error.message;
    } else {
      router.push("/register/confirm");
    }
  };

  return (
    <div className="space-y-6 bg-lavender rounded-sm px-10 py-10">
      <form onSubmit={handleRegister} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white font-bold">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-white font-bold">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="text-white"
          />
        </div>
        <Button
          type="submit"
          className="w-full text-white bg-mintGreen font-bold hover:bg-baseGray"
        >
          Register
        </Button>
      </form>
      <p className="text-center text-sm text-white">
        Already have an account?{" "}
        <Link href="/login" className="text-white font-bold underline">
          Login
        </Link>
      </p>
    </div>
  );
}
