"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FOOTER_CONTACT_INFO, NAV_LINKS, SOCIALS } from "../../constants";
import PrivacyPolicy from "../CheckoutForm/PrivacyPolicy";
import TermsAndConditions from "../CheckoutForm/TermsAndConditions";

const Footer = () => {
  const pathname = usePathname();
  const [isPrivacyPolicyVisible, setIsPrivacyPolicyVisible] = useState(false);
  const [isTermsVisible, setIsTermsVisible] = useState(false);

  const togglePrivacyPolicy = () =>
    setIsPrivacyPolicyVisible(!isPrivacyPolicyVisible);
  const toggleTerms = () => setIsTermsVisible(!isTermsVisible);

  return (
    <>
      <section>
        {/* Display Privacy Policy */}
        {isPrivacyPolicyVisible && (
          <PrivacyPolicy onClose={togglePrivacyPolicy} />
        )}
        {/* Display Terms and Conditions */}
        {isTermsVisible && <TermsAndConditions onClose={toggleTerms} />}
      </section>
      <footer className="mx-1 animate-fade-in bg-blue-100 text-gray-700 rounded-full">
        <div className="padding-container max-container w-full flex flex-col gap-10 p-2 my-2">
          <div className="flex flex-col items-center justify-between md:flex-row gap-6">
            {/* Logo Section */}
            <Link href="/" className="mb-4 md:mb-0 ">
              <Image src="/logo1.png" alt="logo" width={74} height={29} className="mx-1 rounded-full" />
            </Link>

            {/* Links Section */}
            <div className="flex flex-col md:flex-row md:gap-10 items-center w-full justify-between">
              {/* Quick Links */}
              <FooterColumn title="Quick Links">
                <div className="flex flex-wrap gap-1 justify-center items-center">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        href={link.href}
                        key={link.key}
                        className={`${
                          isActive ? "text-primary-500" : "text-gray-600"
                        } regular-16 transition-all hover:text-primary-500`}
                      >
                        {link.label} |
                      </Link>
                    );
                  })}
                </div>
              </FooterColumn>

              {/* Contact Section */}
              <FooterColumn title="Contact Us">
                <div className="flex flex-wrap gap-4 justify-center">
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <div key={link.label} className="flex items-center gap-2">
                      <span>{link.label}:</span>
                      <span className="medium-14 text-blue-700">
                        {link.value}
                      </span>
                    </div>
                  ))}
                </div>
              </FooterColumn>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-primary text-white py-4 rounded-md">
          <div className="container mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="text-center text-sm">
              © {new Date().getFullYear()}{" "}
              <b>Special Campaign for Blind Welfare Foundation</b> | All rights
              reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-4 text-sm">
              <button
                onClick={togglePrivacyPolicy}
                className=" hover:underline"
              >
                Privacy Policy
              </button>
              <button onClick={toggleTerms} className="hover:underline">
                Terms and Conditions
              </button>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              {SOCIALS.links.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="hover:bg-gray-200 p-2 rounded-full transition duration-300"
                >
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={24}
                    height={24}
                    className="hover:scale-110 transition-transform"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <h4 className="font-bold text-lg">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
