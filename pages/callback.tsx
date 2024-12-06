"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Callback = () => {
  const router = useRouter();
  const { transactionId } = router.query;

  useEffect(() => {
    if (transactionId) {
      // Validate the transaction via your backend or API
      console.log('Transaction ID:', transactionId);
    }
  }, [transactionId]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl">Processing Payment...</h1>
    </div>
  );
};

export default Callback;
