import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { orderId, amount, currency, customerId } = req.body;
  // const testMode = process.env.TEST_MODE === "true";
   const testMode = "true";
  // const username = testMode ? "Demo_fY9c" : process.env.ETISALAT_USERNAME;
  // const password = testMode ? "Comtrust@20182018" : process.env.ETISALAT_PASSWORD;
  const apiUrl = testMode
    ? "https://demo-ipg.ctdev.comtrust.ae:2443/"
    : "https://ipg.comtrust.ae:2443/";
  // const orderId = "3333333344444";
  // const callbackUrl = process.env.NEXT_PUBLIC_SITE_URL;
  //  const callbackUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/webhook?order_id=${orderId}`;
  //  const callbackUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/finalize-payment`;
  const callbackUrl = "https://www.scbwfoundation.org/api/finalize-payment";


  const payload = {
    Registration: {
      Customer: "Demo Merchant",
      Channel: "Web",
      Amount: `${amount}.00`,
      Currency: currency,
      TransactionHint: "CPT:Y;VCC:Y;",
      ReturnPath: callbackUrl,
      UserName: "Demo_fY9c",
      Password: "Comtrust@20182018",
      // Customer: customerId,
      OrderID: orderId,
      OrderName: `Order #${orderId}`,
      OrderInfo: `Payment for order ${orderId}`,
      Store: "0000",
      Terminal: "0000",
      // ReturnPath:"https://www.localhost:3000",
      // OrderName: "Order #3333333344444",
      // Username: username,
      // Password: password,
    },
  };
  // console.log(payload);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload),
    });

    const textResponse = await response.text();
    console.log("Raw API Response:", textResponse);

    // Check if response is empty
    if (!textResponse.trim()) {
      console.error("Error: Empty response from Etisalat API");
      return res.status(500).json({ error: "Empty response from payment provider. For more information, please contact your card issuing bank." });
    }

    let data;
    try {
      data = JSON.parse(textResponse);
    } catch (error) {
      console.error("JSON Parsing Error:", error);
      return res.status(500).json({ error: "Invalid JSON response from payment provider. For more information, please contact your card issuing bank." });
    }

    if (!data?.Transaction || data.Transaction.ResponseCode !== "0") {
      return res.status(400).json({
        error: data?.Transaction?.ResponseDescription || "Unknown error. For more information, please contact your card issuing bank.",
      });
    }

    return res.json({ paymentUrl: data.Transaction.PaymentPage });
  } catch (error) {
    console.error("Payment processing error:", error);
    return res.status(500).json({ error: "Payment processing failed. For more information, please contact your card issuing bank." });
  }
}

