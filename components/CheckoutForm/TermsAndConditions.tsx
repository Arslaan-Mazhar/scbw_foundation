"use client";
import React from "react";

type TermsAndConditionsProps = {
  onClose: () => void;
};

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onClose }) => {
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
        <h2 className="text-lg font-semibold text-center">Terms and Conditions</h2>
        <h3 className="mt-4 font-semibold">1. Introduction</h3>
              <p>Welcome to Special Campaign for Blind Welfare Foundation. These Terms and Conditions govern your use of our website www.scbwfoundation.org...</p>

              <h3 className="mt-4 font-semibold">2. Acceptance of Terms</h3>
              <p>By using our Site, you confirm that you accept these Terms and agree to comply with them...</p>

              <h3 className="mt-4 font-semibold">3. Changes to Terms</h3>
              <p>We may revise these Terms from time to time. The updated Terms will be posted on this page...</p>

              <h3 className="mt-4 font-semibold">4. Accessing Our Site</h3>
              <p>We do not guarantee that our Site, or any content on it, will always be available...</p>

              <h3 className="mt-4 font-semibold">5. Donations</h3>
              <p>Donations made to Special Campaign for Blind Welfare Foundation through the website are voluntary and non-refundable.We ensure that your donation is used effectively to support our mission and objectives.</p>
              
              <h3 className="mt-4 font-semibold text-justify">6.  Intellectual Property Rights</h3>
              <p>We are the owner or the licensee of all intellectual property rights in our Site, and in the material published on it. These works are protected by copyright laws and treaties around the world. All such rights are reserved. You may print off one copy, and may download extracts, of any page(s) from our Site for your personal use and you may draw the attention of others within your organization to content posted on our Site.</p>
              <div className="text-sm text-gray-700">
        <h3 className="font-semibold text-lg mt-4">7. Prohibited Uses</h3>
        <p className="mb-4">
          You may use our Site only for lawful purposes. You may not use our Site:
        </p>

        <ul className="list-disc pl-5 space-y-3">
          <li className="text-gray-600">
            In any way that breaches any applicable local, national, or international law or regulation.
          </li>
          <li className="text-gray-600">
            In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect.
          </li>
          <li className="text-gray-600">
            For the purpose of harming or attempting to harm minors in any way.
          </li>
          <li className="text-gray-600">
            To send, knowingly receive, upload, download, use, or re-use any material which does not comply with our content standards.
          </li>
          <li className="text-gray-600">
            To transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material or any other form of similar solicitation (spam).
          </li>
        </ul>
      </div>
              <h3 className="mt-4 font-semibold">8.  Limitation of Liability</h3>
              <p>Nothing in these Terms excludes or limits our liability for death or personal injury arising from our negligence, or  our  fraud  or  fraudulent  misrepresentation,  or  any  other  liability  that  cannot  be  excluded  or  limited  by Pakistani law. To the extent permitted by law, we exclude all conditions, warranties, representations, or other terms which may apply to our Site or any content on it, whether express or implied.</p>
              <h3 className="mt-4 font-semibold">9.  Privacy Policy</h3>
              <p>Our Privacy Policy [link to privacy policy] sets out the terms on which we process any personal data we collect from you, or that you provide to us. By using our Site, you consent to such processing and you warrant that all data provided by you is accurate.</p>
              <h3 className="mt-4 font-semibold">10.  Governing Law</h3>
              <p>These Terms are governed by and construed in accordance with the laws of Pakistan. Any disputes relating to these Terms will be subject to the exclusive jurisdiction of the courts of Pakistan.</p> 
              <h3 className="mt-4 font-semibold">11.  Contact Us</h3>
              <p>If you have any questions about these Terms, please contact us at:</p> 
              <span><b><i>Special Campaign for Blind Welfare Foundation</i></b> </span> <br />
              <span><b><i>3rd floor alsafa plaza near sadar police station Lalamusa, Gujrat, Pakistan.</i></b> </span> <br />
              <span><b><i> scbfoundation92@gmail.com</i></b> </span> <br />
              <span><b><i>+92-332-9292311</i></b> </span> <br />          
      </div>
    </div>
  );
};

export default TermsAndConditions;
