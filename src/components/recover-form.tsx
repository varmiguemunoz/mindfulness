"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { createClient } from "@/utils/supabase/client";

export default function RecoverForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const supabase = createClient();

  const handleRecover = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/recovery/password`,
    });
    if (error) {
      toast.error("Error Recover in");
    } else {
      toast.success("Recover message sent");
      router.push("/recovery/confirm");
    }
  };

  return (
    <div className="space-y-6 bg-[#313131] rounded-sm px-10 py-10">
      <form onSubmit={handleRecover} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Insert your Email"
            className="text-white"
          />
        </div>

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
