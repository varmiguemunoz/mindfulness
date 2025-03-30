import CTA from "@/app/[lang]/(site)/Cta";
import FAQ from "@/app/[lang]/(site)/Faq";
import Footer from "@/app/[lang]/(site)/Footer";
import HeroSection from "@/app/[lang]/(site)/Hero";
import Navbar from "@/app/[lang]/(site)/Navbar";
import PricingSection from "@/app/[lang]/(site)/pricing";
import TestimonialsPage from "@/app/[lang]/(site)/Testimonials";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/utils/supabase/actions";
import OfferModal from "@/components/ui/OfferModal";
import { redirect } from "next/navigation";
import { getDictionary } from "../i18n/dictionary";

export default async function Home({
  params,
}: {
  params: { lang: "en" | "es" };
}) {
  const lang = (await params).lang;

  const t = await (await getDictionary(lang)).homepage;

  console.log(t);

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
          (currentDate - dismissedTimestamp) / (1000 * 3600 * 24); // Diferencia en días

        if (diffInDays < 15) {
          hasDismissedModal = true; // No mostrar el modal si han pasado menos de 15 días
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
      <p>{t.title}</p>
      <PricingSection />
      <FAQ />
      <TestimonialsPage />
      <CTA />
      <Footer />
    </div>
  );
}
