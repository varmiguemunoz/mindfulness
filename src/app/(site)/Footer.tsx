import NewsLetter from "@/components/NewsLetter";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/20 bg-lightGray/15 px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-center">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-black/80">
                Mindfulness
              </span>
            </div>
            <p className="text-sm text-zinc-400">
              Exclusive Mindfulness & Wellness Content
            </p>
            <p className="text-sm text-zinc-500">
              Copyright © 2025 - All rights reserved
            </p>
            <div className="inline-flex items-center gap-2 rounded-md border border-softSky bg-softSky px-4 py-2 text-xs text-white font-bold">
              Crafted with ☀️ for Your Well-Being
            </div>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-zinc-400 hover:text-zinc-500"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-zinc-400 hover:text-zinc-500"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Pages
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="text-zinc-400 hover:text-zinc-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-400 hover:text-zinc-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* By the Creator Column */}
          <NewsLetter />
        </div>

        <div className="mt-12 border-t border-zinc-800/15 pt-8 text-center text-sm text-zinc-500">
          © 2025 Mindfulness. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
