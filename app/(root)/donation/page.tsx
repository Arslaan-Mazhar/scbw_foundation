"use client";
import React, {useState} from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import CheckoutForm from "@/components/CheckoutForm/page";
import { Button } from "@/components/ui/button";
function DonationForm() {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  // const router = useRouter();
  const handleDonateClick = () => {
    // router.push("/components/DonationForm");
    setShowCheckoutForm(true);

  };
    // Close the CheckoutForm when the background is clicked
    const handleCloseForm = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        setShowCheckoutForm(false);
      }
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
          <div className=" container mx-auto text-center">
            <h1 className="text-3xl font-bold">Support Our Mission</h1>
            <p className="mt-2">
              Your generosity empowers visually impaired individuals to lead
              independent lives.
            </p>
          </div>
        </header>

        {/* How You Can Help */}
        <section className="py-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              How You Can Help
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                {
                  title: "Education & Training",
                  description:
                    "Support education and skills development programs for the visually impaired.",
                },
                {
                  title: "Healthcare Services",
                  description:
                    "Provide medical assistance and equipment for accessible healthcare.",
                },
                {
                  title: "Community Integration",
                  description:
                    "Promote inclusive community programs and events.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 shadow-md rounded-lg"
                >
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Methods */}
        <section className="py-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Donation Methods
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bank Transfer */}
              <div className="bg-gray-50 p-6 shadow-md rounded-lg">
                <h3 className="text-xl font-semibold">Bank Transfer</h3>
                <p className="mt-4">
                  <strong>Bank Name:</strong> UBL
                  <br />
                  <strong>Account Title:</strong> Special Campaign for Blind
                  Welfare Foundation
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
                <Button
                   onClick={handleDonateClick}
                  // disabled
                  className="mt-4 inline-block px-4 py-2 text-white rounded shadow transform hover:scale-105 transition-all duration-300"
                >
                  Donation Online
                </Button>
              </div>
            </div>
          </div>
        </section>
         {/* Conditionally render CheckoutForm */}
      {showCheckoutForm && (
        <div
          onClick={handleCloseForm}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          {/* <PaymentForm orderId="7210055701315195" amount={"20.00"} customerId="Demo Merchant" /> */}
          <CheckoutForm />
        </div>
      )}

        {/* Tax Exemption */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold">Tax Exemption</h2>
            <p className="mt-4 text-lg text-gray-700">
              All donations are tax-exempt. Your contribution makes a
              difference!
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white py-6 rounded-full">
          <div className="container mx-auto text-center">
            <p>
              Thank you for considering supporting our mission. Together, we can
              empower visually impaired individuals and create a more inclusive
              society.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default DonationForm;
