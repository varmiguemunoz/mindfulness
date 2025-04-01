import Slider from "../(site)/Slider";
import Videos from "../(site)/Videos";
import PricingSection from "../(site)/pricing";
import NotActiveSubscription from "@/components/ui/notSubscription";
import OfferModal from "@/components/ui/OfferModal";

import { getStripePrices, getSuscriptionStatus } from "@/utils/api";
import Blog from "../(site)/Blog";
import { getSliderImages } from "@/utils/sanity";

export default async function Dashboard() {
  const { status, showDiscount } = await getSuscriptionStatus();
  const sliderData = await getSliderImages();

  const { priceId } = await getStripePrices();

  const subscriptionActive = status === "active" ? true : false;

  return (
    <div className="w-full">
      {showDiscount && (
        <OfferModal
          id="dashboard"
          message="By subscribing to our service, you'll receive an exclusive discount on your next purchase."
          fromDashboard
        />
      )}
      <Slider
        className="w-full mt-[90px] h-[768px] bg-zinc-900/30"
        pagination={true}
        data={sliderData}
      />
      {subscriptionActive ? (
        <>
          <Videos />
          <Blog />
        </>
      ) : (
        <div className="min-h-screen bg-white/15 text-white pt-16">
          <NotActiveSubscription />
          <PricingSection
            fromDashboard
            priceId={priceId}
            discount={showDiscount}
          />
        </div>
      )}
    </div>
  );
}
