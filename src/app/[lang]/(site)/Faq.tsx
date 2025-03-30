"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Hentify?",
    answer:
      "Hentify is a premium hentai streaming platform in high quality, ad-free and with an extensive library of exclusive content.",
  },
  {
    question: "Do I need to subscribe to watch content?",
    answer:
      "Yes, we offer premium plans that unlock our entire catalog in Full HD and 4K, with no interruptions and access to exclusive content.",
  },
  {
    question: "On which devices can I watch Hentify?",
    answer:
      "Hentify is compatible with mobiles, tablets and computers, so you can enjoy anytime, anywhere.",
  },
  {
    question: "Do you have subtitles in multiple languages?",
    answer:
      "Yes, many of our titles feature subtitles in multiple languages, including English and Spanish.",
  },
  {
    question: "How does privacy work at Hentify?",
    answer:
      "We take your privacy very seriously. All your viewing history and personal data is protected and not shared with third parties.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time from your account, with no hidden fees or penalties.",
  },
  {
    question: "How can I contact support if I have problems?",
    answer: "You can write to our 24/7 support via email.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="py-28 bg-[#0F0F0F] px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center text-4xl font-medium text-white">
          Frequently Asked Questions
        </h2>
        <p className="mb-12 text-center text-base text-zinc-500">
          Have another question? Contact us on{" "}
          <a
            href="https://x.com/"
            target="_blank"
            className="text-zinc-200 hover:text-white underline"
          >
            Twitter
          </a>{" "}
          or by{" "}
          <a
            href="varmiguemunoz@gmail.com"
            target="_blank"
            className="text-zinc-200 hover:text-white underline"
          >
            email
          </a>
          .
        </p>

        <div className="space-y-[2px]">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden">
              <button
                onClick={() => toggleQuestion(index)}
                className="flex w-full items-center justify-between bg-zinc-900/50 px-6 py-4 text-left transition-colors hover:bg-zinc-900"
              >
                <span className="text-[16px] font-medium text-white">
                  {faq.question}
                </span>
                <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-700">
                  <PlusIcon
                    className={`h-3 w-3 text-white transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`}
                  />
                </span>
              </button>
              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="bg-zinc-900/30 px-6 py-4 text-base text-zinc-400">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlusIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}
