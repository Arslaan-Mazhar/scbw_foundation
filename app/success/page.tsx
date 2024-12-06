import React from "react";

const SuccessPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-green-100">
      <h1 className="text-5xl font-extrabold text-green-700 animate-bounce">
        Payment Successful!
      </h1>
      <p className="text-lg text-gray-700 mt-4">
        Thank you for supporting the Blind Welfare Foundation. Your contribution
        makes a difference!
      </p>
      <a href="/" className="mt-8">
        <button className="bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600">
          Go Back to Home
        </button>
      </a>
    </div>
  );
};

export default SuccessPage;
