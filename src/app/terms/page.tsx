import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hentify | Terms and Conditions",
  description:
    "Consult Hentify's Terms and Conditions. Know the rules of use, content, copyright and privacy policies. Make sure you understand our terms and conditions before using our streaming services.",
  keywords: ["terms", "conditions", "hentai", "hentify", "platform"],
};

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link
          href="/"
          className="btn btn-ghost text-black flex items-center mb-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Go Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6 text-black">
          Terms and Conditions
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap text-black/50"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Terms and Conditions

Effective Date: 12/2/2025

1. Introduction Welcome to Pump ("we," "our," or "us"). These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to abide by these terms.

2. Use of Services You agree to use our services only for lawful purposes and in compliance with these Terms and Conditions. We reserve the right to suspend or terminate access to our services for any misuse.

3. User Accounts To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.

4. Payments and Subscriptions If you purchase any of our paid services, you agree to provide accurate payment information. All payments are non-refundable unless otherwise stated.

5. Privacy Policy Your use of our services is also governed by our Privacy Policy, which explains how we collect and use your data. By using our services, you consent to our data practices.

6. Intellectual Property All content on our website, including logos, text, and graphics, is our property and protected by intellectual property laws. You may not use or reproduce any content without prior written permission.

7. Limitation of Liability We are not liable for any indirect, incidental, or consequential damages arising from your use of our services. Your use of our services is at your own risk.

8. Termination We reserve the right to terminate or suspend access to our services at any time, without notice, if you violate these Terms and Conditions.

9. Changes to These Terms We may update these Terms and Conditions from time to time. Any changes will be effective immediately upon posting on our website.

10. Contact Information If you have any questions regarding these Terms and Conditions, please contact us at miguelmunoz@bloomify.tech.

By using our services, you acknowledge that you have read and agreed to these Terms and Conditions.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
