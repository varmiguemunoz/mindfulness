"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { FaGooglePlusG } from "react-icons/fa";
import { toast } from "sonner";

import SEO from "@/utils/seo";
import { createClient } from "@/utils/supabase/client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      toast.error("Error logging in");
    } else {
      toast.success("Logged in successfully");
      router.push("/dashboard");
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/callback`,
      },
    });
    if (error) {
      toast.error("Error authenticating with Google");
      throw error.message;
    }
  };

  return (
    <>
      <SEO
        title="Hentify | Login"
        description="Enjoy unlimited hentai streaming in Full HD with no ads. Access exclusive content and premium titles. Join Hentify today for the ultimate experience!"
        canonicalUrl="https://www.hentifyhub.com/"
        ogImageUrl="https://www.hentifyhub.com/header.png"
        twitterHandle="yourtwitterhandle"
      />
      <div className="space-y-6 bg-[#313131] rounded-sm px-10 py-10">
        <form onSubmit={handleLogin} className="space-y-4">
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
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Insert your Password"
              value={password}
              className="text-white"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#A65B99] hover:bg-[#D982CA]"
          >
            Login
          </Button>
        </form>
        <div className="flex flex-col space-y-4">
          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className="w-full bg-orange-100 border-orange-200 hover:bg-orange-200"
          >
            <FaGooglePlusG className="text-orange-700 w-[35px]" size={35} />
            Sign in with Google
          </Button>
        </div>
        <p className="text-center text-sm text-white">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>{" "}
          Or{" "}
          <Link href="/recovery" className="text-blue-500 hover:underline">
            Recover
          </Link>
        </p>
      </div>
    </>
  );
}
