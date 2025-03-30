"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { createClient } from "@/utils/supabase/client";

export default function RecoverPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const supabase = createClient();

  // All the logic in order to create a new password
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      const { error } = await supabase.auth.updateUser({ password: password });

      if (error) {
        toast.error("Error logging in");
      } else {
        toast.success("Logged in successfully");
        router.push("/dashboard");
      }
    }
  };
  return (
    <div className="space-y-6 bg-[#313131] rounded-sm px-10 py-10">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Insert your password"
            className="text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Confirm Password
          </Label>
          <Input
            id="Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm your password"
            className="text-white"
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}

        <Button
          type="submit"
          className="w-full bg-[#A65B99] hover:bg-[#D982CA]"
        >
          Recover
        </Button>
      </form>
      <p className="text-center text-sm text-white">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
