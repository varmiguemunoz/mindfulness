import LoginForm from "@/components/login-form";
import { Suspense } from "react";

export default function Login() {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-xl w-full flex flex-col gap-4">
        <h1 className="text-4xl text-center sm:text-5xl md:text-6xl font-extrabold mb-4 text-[#CFCFCF] leading-tight">
          Login
        </h1>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </section>
  );
}
