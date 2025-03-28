import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/firebase"; // Import Firebase Firestore instance
import { getDoc, doc } from "firebase/firestore";
// import { BLOCKED_IPS } from "@/_middleware"; // Import blocked IPs

// const allowedOrigins = ["https://scbwfoundation.org"]; // Allowed domains

// async function isBlockedIP(ip: string): Promise<boolean> {
//   try {
//     const docRef = doc(db, "blocked_ips", ip); // Reference to the document
//     const docSnap = await getDoc(docRef); // Fetch the document

//     return docSnap.exists(); // Returns true if the document exists
//   } catch (error) {
//     console.error("Error checking blocked IP:", error);
//     return false;
//   }
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { orderId, amount, finalAmount, currency } = req.body;

  const apiUrl: any = process.env.SITE_URL;
  const username = process.env.MY_USERNAME;
  const password = process.env.PASSWORD;
  const customerId = "SCBW FOUNDATION";
  const transactionHint = "CPT:Y;VCC:Y;";
  const callbackUrl = process.env.CALLBACK_URL;
  const paymentAmount = finalAmount ? finalAmount : amount;


  const payload = {
    Registration: {
      // Customer: "Demo Merchant",   // Test account
      Customer: customerId,    // live account
      Channel: "Web",
      Amount: paymentAmount,
      Currency: currency,
      TransactionHint: transactionHint,
      ReturnPath: callbackUrl,
      // UserName: "Demo_fY9c",              // Test account
      // Password: "Comtrust@20182018",     // Test account
      UserName: username,
      Password: password,
      // Customer: customerId,
      OrderID: orderId,
      OrderName: `Order #${orderId}`,
      OrderInfo: `Payment for order ${orderId}`,
    },
  };
  // console.log(payload);
  // console.log(isBlockedIP("74.34.43.55"));
  // if (!isBlockedIP) {
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
  // }
}

