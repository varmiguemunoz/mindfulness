"use client";

import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

    //For Testing
    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);
  return (
    <div
      className={` ${cookieConsent != null ? "hidden" : "flex"} mb-8  mx-auto max-w-max md:max-w-screen-sm
        fixed bottom-0 left-0 right-0 px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 bg-white rounded-sm shadow`}
    >
      <div className="text-center">
        <Link href="/privacy">
          <p>
            We use <span className="font-bold text-purpleBase">cookies</span> on
            our website
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setCookieConsent(false)}
          className="px-5 py-2 text-gray-900 rounded-md border-gray-900"
        >
          Decline
        </button>
        <button
          onClick={() => setCookieConsent(true)}
          className="bg-lightPurple px-5 py-2 text-black font-medium rounded-lg"
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
