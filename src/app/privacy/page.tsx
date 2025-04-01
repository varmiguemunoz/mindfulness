import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hentify | Privacy Policies",
  description:
    "Consult Hentify's Privacy Policies. Know the rules of use, content, copyright and privacy policies. Make sure you understand our terms and conditions before using our streaming services.",
  keywords: ["privacy", "terms", "conditions", "hentai", "hentify", "platform"],
};

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link
          href="/"
          className="btn btn-ghost text-black flex items-center mb-3"
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
          </svg>{" "}
          Go Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6 text-black/80">
          Privacy Policy
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap text-black/60"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last updated: 12/2/2025

Privacy Policy

Effective Date:  12/2/2025

1. Introduction Welcome to Pump ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.

2. Information We Collect We collect the following types of data:

Personal Information: Name, email, phone number, and payment information.

Non-Personal Information: Web cookies to enhance your experience on our website.

3. Purpose of Data Collection We collect your data to better understand our clients and improve our services.

4. Data Sharing We do not share your personal data with any third parties.

5. Children's Privacy Our services are not intended for children, and we do not knowingly collect data from individuals under the age of 18.

6. Data Security We take appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.

7. Updates to This Privacy Policy We may update this Privacy Policy from time to time. Any changes will be communicated to you via email.

8. Contact Information if you have any questions or concerns about this Privacy Policy, please contact us at miguelmunoz@bloomify.tech.

By using our services, you agree to the terms outlined in this Privacy Policy.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
