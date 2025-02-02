import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { order_id, status, transaction_id } = req.body;

  if (!order_id || !status || !transaction_id) {
    return res.status(400).json({ error: "Invalid request" });
  }

  try {
    // Process the response from Etisalat and update the order status in the database
    console.log("Webhook received:", { order_id, status, transaction_id });

    // Here, you'd update your database accordingly
    return res.status(200).json({ message: "Payment status received" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to process webhook" });
  }
}
