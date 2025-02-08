"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";
import { Button } from "../ui/button";
import { Amounts, Currencies } from "@/constants";
import { db } from "@/lib/firebase"; // Import Firebase Firestore instance
import { collection, addDoc } from "firebase/firestore";

const CheckoutForm = () => {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [currency, setCurrency] = useState("PKR");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isPrivacyPolicyVisible, setIsPrivacyPolicyVisible] = useState(false);
  const [isTermsVisible, setIsTermsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [randomNumber, setRandomNumber] = useState("");

  useEffect(() => {
    const generateSecure13DigitNumber = () => {
      const array = new Uint32Array(2);
      crypto.getRandomValues(array);
      return (array[0] % 9000000000000 + 1000000000000).toString();
    };
    setRandomNumber(generateSecure13DigitNumber());
  }, []);

  const orderId = randomNumber;
  const togglePrivacyPolicy = () => setIsPrivacyPolicyVisible(!isPrivacyPolicyVisible);
  const toggleTerms = () => setIsTermsVisible(!isTermsVisible);

  const handleCheckout = async () => {
    setLoading(true);
    try {
        await addDoc(collection(db, "donationDB"), {
          fullName,
          phoneNumber,
          email,
          address,
          amount,
          currency,
          orderId,
          createdAt: new Date(), // Store submission timestamp
        });
        // alert("Membership submitted successfully!");

      // Proceed to API call for payment
      const finalAmount = amount === "other" ? customAmount : amount;
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, amount: finalAmount, currency }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Payment failed.");
      window.location.href = data.paymentUrl;
    } catch (error) {
      alert("Failed to create checkout session.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white flex items-center justify-center rounded-xl">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600">Donate to Us</h1>
        <p className="text-center text-gray-600 my-2">
          Your donation helps us support the <br />
          <strong>Blind Welfare Foundation</strong>.
        </p>
        <div className="space-y-2">
          <select
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {Currencies.map((cur) => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>

          <select
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          >
            {Amounts.map((amt) => (
              <option key={amt} value={amt}>{amt}</option>
            ))}
            <option value="other">Other Amount</option>
          </select>

          {amount === "other" && (
            <input
              type="number"
              placeholder="Enter custom amount"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
            />
          )}

          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="flex justify-center">
            <Button
              onClick={handleCheckout}
              className={`w-full md:w-auto px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 transform hover:scale-105 transition-all ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Processing..." : "Proceed to Checkout"}
            </Button>
          </div>
        </div>

        <div className="mt-2 text-sm text-center text-gray-500">
          By donating, you agree to our {" "}
          <button onClick={togglePrivacyPolicy} className="text-blue-500 hover:underline">
            Privacy Policy
          </button>{" "}and {" "}
          <button onClick={toggleTerms} className="text-blue-500 hover:underline">
            Terms and Conditions
          </button>.
        </div>

        {isPrivacyPolicyVisible && <PrivacyPolicy onClose={togglePrivacyPolicy} />}
        {isTermsVisible && <TermsAndConditions onClose={toggleTerms} />}
        <div className="flex justify-end">
              <Image
                src="/UBL-PAY-logo.jpg"
                width={150}
                height={100}
                alt="UBL PAY Logo"
              />
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;

