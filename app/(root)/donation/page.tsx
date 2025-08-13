
"use client";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function DonationForm() {
  const router = useRouter();

  const handleDonateClick = () => {
    router.push("/safePayCheckoutForm"); // Navigate to the CheckoutForm page
  };

  return (
    <>
      <Head>
        <title>Donate Us - SCBW Foundation</title>
        <meta
          name="description"
          content="Help us through your donation and become permanent member of SCBW Foundation, our mission, vision, and the impact we're making for the people in need."
        />
      </Head>
      <div className="bg-gray-50 text-gray-900 min-h-screen">
        {/* Header */}
        <header className="hidden md:block bg-primary mx-56 text-white py-6 rounded-full">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold">Support Our Mission</h1>
            <p className="mt-2">
              Your generosity empowers visually impaired individuals to lead independent lives.
            </p>
          </div>
        </header>

        {/* Donation Methods */}
        <section className="py-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Donation Methods</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bank Transfer */}
              <div className="bg-gray-50 p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-semibold">Bank Transfer</h3>
                <p className="mt-4">
                  <strong>Bank Name:</strong> UBL
                  <br />
                  <strong>Account Title:</strong> Special Campaign for Blind Welfare Foundation
                  <br />
                  <strong>Branch Code:</strong> 1244
                  <br />
                  <strong>Account Number:</strong> 317202269
                  <br />
                  <strong>Swift Code:</strong> UNIL PKKA
                  <br />
                  <strong>IBAN:</strong> PK52UNIL0109000317202269
                </p>
              </div>

              {/* Online Donation */}
              <div className="bg-gray-50 p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-semibold">Online Donation</h3>
                <p className="mt-4">
                  You can donate securely online through our payment gateway:
                </p>
                <div className="flex space-x-4">
                <Button
                  onClick={handleDonateClick}
                  className="mt-4 inline-block bold px-4 py-2 text-white bg-blue-600 rounded shadow transform hover:scale-105 transition-all duration-300"
                >
                  Donate Online via SafePay
                </Button>
                <Button
                  disabled
                  onClick={handleDonateClick}
                  className="mt-4 inline-block bold px-4 py-2 text-white bg-blue-600 rounded shadow transform hover:scale-105 transition-all duration-300"
                >
                  Donate Online via UBL
                </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white py-6 rounded-full">
          <div className="container mx-auto text-center">
            <p>
              Thank you for considering supporting our mission. Together, we can empower visually
              impaired individuals and create a more inclusive society.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default DonationForm;


