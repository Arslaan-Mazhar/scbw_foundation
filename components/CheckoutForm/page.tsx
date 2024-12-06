"use client";
import { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";
import { Button } from "../ui/button";

const currencies = ["PKR", "USD", "EUR", "GBP"];

const CheckoutForm = () => {
  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("PKR");
  const [isPrivacyPolicyVisible, setIsPrivacyPolicyVisible] = useState(false);
  const [isTermsVisible, setIsTermsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePrivacyPolicy = () =>
    setIsPrivacyPolicyVisible(!isPrivacyPolicyVisible);
  const toggleTerms = () => setIsTermsVisible(!isTermsVisible);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/safepay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, currency }),
      });

      const data = await response.json();
      console.log(data);
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        alert("Failed to create checkout session.");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white  flex items-center justify-center rounded-xl">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Donate to Us
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Your donation helps us support the <br />
          <strong>Blind Welfare Foundation</strong>.
        </p>
        <div className="space-y-6">
          {/* Currency Selector */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Select Currency:
            </label>
            <select
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>
          {/* Amount Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Enter Amount:
            </label>
            <input
              type="number"
              placeholder="Enter donation amount"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          {/* Checkout Button */}
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
        {/* Privacy Policy and Terms */}
        <div className="mt-6 text-sm text-center text-gray-500">
          By donating, you agree to our{" "}
          <button
            onClick={togglePrivacyPolicy}
            className="text-blue-500 hover:underline"
          >
            Privacy Policy
          </button>{" "}
          and{" "}
          <button
            onClick={toggleTerms}
            className="text-blue-500 hover:underline"
          >
            Terms and Conditions
          </button>.
        </div>
        {/* Modals */}
        {isPrivacyPolicyVisible && (
          <PrivacyPolicy onClose={togglePrivacyPolicy} />
        )}
        {isTermsVisible && <TermsAndConditions onClose={toggleTerms} />}
      </div>
    </section>
  );
};

export default CheckoutForm;



// "use client";
// import { useState } from "react";
// import PrivacyPolicy from "./PrivacyPolicy";
// import TermsAndConditions from "./TermsAndConditions";
// import { Button } from "../ui/button";

// const currencies = ["PKR", "USD", "EUR", "GBP"];
// const CheckoutForm = () => {
//   const [amount, setAmount] = useState<number>(0);
//   const [currency, setCurrency] = useState<string>("PKR");
//   const [isPrivacyPolicyVisible, setIsPrivacyPolicyVisible] = useState(false);
//   const [isTermsVisible, setIsTermsVisible] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const togglePrivacyPolicy = () =>
//     setIsPrivacyPolicyVisible(!isPrivacyPolicyVisible);
//   const toggleTerms = () => setIsTermsVisible(!isTermsVisible);

//   const handleCheckout = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("/api/safepay", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ amount, currency }),
//       });

//       const data = await response.json();
//       console.log(data);
//       if (data.checkoutUrl) {
//         window.location.href = data.checkoutUrl;
//       } else {
//         alert("Failed to create checkout session.");
//       }
//     } catch (error) {
//       console.error("Error creating checkout session:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <section className="bg-gray-200 p-10 rounded-xl">
//         <h1 className="text-3xl font-bold mb-6 text-center">Donate Us</h1>
//         <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
//           <h2 className="text-xl font-bold mb-4 text-center">Checkout</h2>
//           <div className="md:flex items-center justify-center gap-5 mb-4">
//             <label className="block mb-2 font-semibold ">Select Currency : </label>
//             <select
//               className="border rounded-md px-4 py-2 w-48"
//               value={currency}
//               onChange={(e) => setCurrency(e.target.value)}
//             >
//               {currencies.map((cur) => (
//                 <option key={cur} value={cur}>
//                   {cur}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="md:flex items-center justify-center gap-9 mb-4">
//             <label className="block mb-2 font-semibold">Enter Amount : </label>
//             <input
//               type="number"
//               className="border rounded-md px-4 py-2 w-48"
//               value={amount}
//               onChange={(e) => setAmount(Number(e.target.value))}
//             />
//           </div>
//           <Button
//             onClick={handleCheckout}
//             className={`w-60 mx-auto  text-md transform hover:scale-105 transition-all duration-300 rounded-md ${
//               loading ? "opacity-50" : ""
//             }`}
//             disabled={loading}
//           >
//             {loading ? "Processing..." : " Proceed to Checkout"}
//           </Button>
//           <div className="mt-8 text-sm text-gray-500">
//             By donating, you agree to our{" "}
//             <button
//               onClick={togglePrivacyPolicy}
//               className="text-blue-500 hover:underline"
//             >
//               Privacy Policy
//             </button>{" "}
//             and{" "}
//             <button
//               onClick={toggleTerms}
//               className="text-blue-500 hover:underline"
//             >
//               Terms and Conditions
//             </button>
//           </div>
//         </div>
//         {/* Display Privacy Policy */}
//         {isPrivacyPolicyVisible && (
//           <PrivacyPolicy onClose={togglePrivacyPolicy} />
//         )}
//         {/* Display Terms and Conditions */}
//         {isTermsVisible && <TermsAndConditions onClose={toggleTerms} />}
//       </section>
//     </>
//   );
// };

// export default CheckoutForm;
