import { NextApiRequest, NextApiResponse } from "next";
import Safepay from "@sfpy/node-core";

const safepay = new Safepay(
  process.env.SAFEPAY_SECRET_KEY as string,
  { authType: "secret", host: "https://sandbox.api.getsafepay.com" }
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { amount, currency } = req.body;

  try {
    const { data } = await safepay.payments.session.setup({
      merchant_api_key: process.env.SAFEPAY_PUBLIC_KEY as string,
      intent: "CYBERSOURCE",
      mode: "payment",
      currency,
      amount: amount * 100, // Convert amount to lowest denomination
    });

    const { data: tbt } = await safepay.client.passport.create();

    const checkoutUrl = await safepay.checkout.createCheckoutUrl({
      env: "sandbox",
      source: "hosted",
      tbt,
      tracker: data.tracker.token,
      cancel_url: "https://www.scbwfoundation.org/cancel",
      redirect_url: "https://www.scbwfoundation.org/success",
    });

    res.status(200).json({ checkoutUrl });
  } catch (error) {
    console.error("Error creating checkout URL:", error);
    res.status(500).json({ message: "Failed to create checkout URL" });
  }
}
