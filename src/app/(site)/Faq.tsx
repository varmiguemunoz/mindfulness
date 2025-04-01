"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Mindfulness?",
    answer:
      "Our platform specializes in mindfulness practice which involves being consciously present in the moment, observing your thoughts, feelings and sensations without judging them. ",
  },
  {
    question: "Do I need to subscribe to watch content?",
    answer:
      "Yes, we offer premium plans that unlock our entire catalog in Full HD and 4K, with no interruptions and access to exclusive content to a lower price.",
  },
  {
    question: "On which devices can I watch Hentify?",
    answer:
      "Minfulness is compatible with mobiles, tablets and computers, so you can enjoy anytime, anywhere.",
  },
  {
    question: "Do you have subtitles in multiple languages?",
    answer: "Yes, many of our titles feature subtitles in English and Spanish.",
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
    <div id="faq" className="py-28 bg-lightGray/15 px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center text-4xl font-medium text-black/80">
          Frequently Asked Questions
        </h2>
        <p className="mb-12 text-center text-base text-zinc-500">
          Have another question? Contact us on{" "}
          <a
            href="miguelmunoz@bloomify.tech"
            target="_blank"
            className="text-black/80 hover:text-black/60 underline"
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
                className="flex w-full items-center justify-between bg-lavender px-6 py-4 text-left transition-colors hover:bg-lavender/80 focus:outline-none focus:ring-2 focus:ring-lavender/90 focus:ring-offset-2"
              >
                <span className="text-[16px] font-medium text-white">
                  {faq.question}
                </span>
                <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-700">
                  <PlusIcon
                    className={`h-3 w-3 text-white font-bold transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`}
                  />
                </span>
              </button>
              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="bg-lavender/40 px-6 py-4 text-base text-black/40">
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
