import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative bg-softSky px-4 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Start Your Journey to Mindfulness Today!
        </h2>
        <p className="mb-8 text-lg text-black/30 md:text-xl">
          Stop wasting time on distractions, enjoy a <br /> seamless mindfulness
          experience with our platform!
        </p>
        <Link
          href="/login"
          className="inline-flex items-center gap-2 rounded-lg bg-mintGreen hover:bg-[#3C3C3C] px-6 py-3 text-base  text-white font-bold transition-colors"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
