import React from "react";
import Footer from "../(site)/Footer";
import Navbar from "../(site)/Navbar";

import { createClient } from "@/utils/supabase/server";
import { getSuscriptionStatus } from "@/utils/api";
import { signOut } from "@/utils/supabase/actions";

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const data = await getSuscriptionStatus();

  const subscriptionActive = data && data === ("active" as any) ? true : false;
  return (
    <div>
      <Navbar
        session={user}
        signOut={signOut}
        showSearch={subscriptionActive}
      />
      <div className="w-full max-w-[1114px] mx-auto py-20  mt-[80px]">
        {children}
      </div>
      <Footer />
    </div>
  );
}
