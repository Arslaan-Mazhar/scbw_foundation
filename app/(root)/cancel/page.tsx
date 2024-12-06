"use client"
import React from "react";

const CancelPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-red-100">
      <h1 className="text-5xl font-extrabold text-red-700 animate-shake">
        Payment Cancelled!
      </h1>
      <p className="text-lg text-gray-700 mt-4">
        Your transaction was not completed. Please try again or contact us if
        you need assistance.
      </p>
      <a href="/" className="mt-8">
        <button className="bg-red-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-600">
          Go Back to Home
        </button>
      </a>
    </div>
  );
};

export default CancelPage;
