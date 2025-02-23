"use client";
import React from "react";

type PrivacyPolicyProps = {
  onClose: () => void;
};

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-white bg-opacity-90 p-8 overflow-auto"
      style={{ maxHeight: "100vh" }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 text-3xl hover:bg-gray-300 p-1 rounded-full duration-300 hover:scale-110 transition-transform"
      >
        &times; {/* Close button */}
      </button>
      <div className="text-sm text-gray-700">
        <h2 className="text-lg font-semibold text-center">Privacy Policy</h2>
        <p>
                This Privacy Policy describes how Special Campaign for Blind
                Welfare Foundation collects, uses, and protects the personal
                information you provide on our website.
              </p>
              <h3 className="mt-4 font-semibold">1. Information We Collect</h3>
              <ul className="list-disc pl-5">
                <li>
                  Personal Information: Name, email address, postal address,
                  phone number.
                </li>
                <li>
                  Donation Information: Payment information, donation amount,
                  and billing address.
                </li>
                <li>
                  Usage Data: IP address, browser type, pages visited, and
                  browsing data.
                </li>
              </ul>
              <h3 className="mt-4 font-semibold">2. Use of Information</h3>
              <ul className="list-disc pl-5">
                <li>To provide and personalize our services to you.</li>
                <li>To process donations and communicate with donors.</li>
                <li>To respond to inquiries and provide support.</li>
                <li>To improve our website and services.</li>
                <li>
                  To send periodic emails and newsletters about our activities
                  and campaigns.
                </li>
                <li>To comply with legal obligations.</li>
              </ul>
              <section >
                <h2 className="mt-4 font-semibold">
                  3. Data Sharing and Disclosure
                </h2>
                <ul className="list-disc pl-5">
                  <li>
                    With service providers who assist us in operating our
                    website and providing our services.
                  </li>
                  <li>
                    With payment processors to process donations securely.
                  </li>
                  <li>
                    With law enforcement or government agencies if required by
                    law or to protect our rights and property.
                  </li>
                  <li>With your consent or at your direction.</li>
                </ul>
              </section>

              {/* Section 4: Data Security */}
              <section >
                <h2 className="mt-4 font-semibold">
                  4. Data Security
                </h2>
                <p className="text-gray-700">
                  We are committed to ensuring the security of your personal
                  information. We use industry-standard security measures to
                  protect your data from unauthorized access, disclosure,
                  alteration, or destruction.
                </p>
              </section>

              {/* Section 5: Data Retention */}
              <section>
                <h2 className="mt-4 font-semibold">
                  5. Data Retention
                </h2>
                <p className="text-gray-700">
                  We will retain your personal information for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy, unless a longer retention period is required or
                  permitted by law.
                </p>
              </section>

              {/* Section 6: Your Rights */}
              <section>
                <h2 className="mt-4 font-semibold">
                  6. Your Rights
                </h2>
                <ul className="list-disc pl-5">
                  <li>Access, update, or delete your personal information.</li>
                  <li>
                    Object to the processing of your personal information.
                  </li>
                  <li>
                    Withdraw your consent for processing your personal
                    information, where applicable.
                  </li>
                </ul>
              </section>

              {/* Section 7: Third-Party Links */}
              <section>
                <h2 className="mt-4 font-semibold">
                  7. Third-Party Links
                </h2>
                <p className="text-gray-700">
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices or content of these
                  third-party sites. We encourage you to review the privacy
                  policies of those websites before providing any personal
                  information.
                </p>
              </section>

              {/* Section 8: Children's Privacy */}
              <section>
                <h2 className="mt-4 font-semibold">
                  8. Children’s Privacy
                </h2>
                <p className="text-gray-700">
                  Our website is not directed at children under the age of 13.
                  We do not knowingly collect personal information from
                  children. If you are a parent or guardian and believe that
                  your child has provided us with personal information, please
                  contact us so that we can delete it.
                </p>
              </section>

              {/* Section 9: Changes to this Privacy Policy */}
              <section>
                <h2 className="mt-4 font-semibold">
                  9. Changes to this Privacy Policy
                </h2>
                <p className="text-gray-700">
                  We reserve the right to update or modify this Privacy Policy
                  at any time. We will notify you of any changes by posting the
                  new Privacy Policy on this page.
                </p>
                </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
