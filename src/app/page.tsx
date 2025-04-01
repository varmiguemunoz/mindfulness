import CTA from "@/app/(site)/Cta";
import FAQ from "@/app/(site)/Faq";
import Footer from "@/app/(site)/Footer";
import HeroSection from "@/app/(site)/Hero";
import Navbar from "@/app/(site)/Navbar";
import PricingSection from "@/app/(site)/pricing";
import TestimonialsPage from "@/app/(site)/Testimonials";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/utils/supabase/actions";
import OfferModal from "@/components/ui/OfferModal";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let hasDismissedModal = false;

  // Función para verificar si han pasado 15 días desde que el usuario cerró el modal

  (() => {
    if (typeof window !== "undefined") {
      const dismissedDate = localStorage.getItem("modalDismissedDate");
      if (dismissedDate) {
        const dismissedTimestamp = parseInt(dismissedDate);
        const currentDate = new Date().getTime();
        const diffInDays =
          (currentDate - dismissedTimestamp) / (1000 * 3600 * 24);

        if (diffInDays < 15) {
          hasDismissedModal = true;
        }
      }
    }
    return hasDismissedModal;
  })();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="w-full">
      <OfferModal
        id="landing"
        message="Subscribe now and get a discount on your first month!"
      />
      <Navbar session={user} signOut={signOut} />
      <HeroSection />
      <PricingSection />
      <FAQ />
      <TestimonialsPage />
      <CTA />
      <Footer />
    </div>
  );
}
