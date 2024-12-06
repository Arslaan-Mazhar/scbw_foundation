import React from 'react';

interface SafepayButtonProps {
  amount: number; // or other props like currency, description, etc.
}

const SafepayButton: React.FC<SafepayButtonProps> = ({ amount }) => {
  const initiatePayment = async () => {
    try {
      const response = await fetch('/api/safepay/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });
      const { redirectUrl } = await response.json();
      window.location.href = redirectUrl;
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  return (
    <button
      className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      onClick={initiatePayment}
    >
      Pay with Safepay
    </button>
  );
};

export default SafepayButton;
