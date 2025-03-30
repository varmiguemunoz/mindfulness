import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative bg-[#0F0F0F] px-4 py-24 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
          Access Now to the Best Hentai in HD
        </h2>
        <p className="mb-8 text-lg text-zinc-400 md:text-xl">
          Don&apos;t waste your time on websites full of advertising and very
          low quality content, solve this problem with hentify.
        </p>
        <Link
          href="/login"
          className="inline-flex items-center gap-2 rounded-lg bg-[#A65B99] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#D982CA]/90"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
