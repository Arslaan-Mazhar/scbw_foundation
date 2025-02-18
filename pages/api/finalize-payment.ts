import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Extract TransactionID from the request body
  console.log(req.body);
  const { TransactionID } = req.body;
  // const {TransactionID} = Transaction;
  // console.log("ID>>>>>" + TransactionID);
  if (!TransactionID) {
    return res.status(400).json({ error: "Transaction ID is required", receivedBody: req.body });
  }

  console.log("Finalizing Payment for TransactionID:", TransactionID);
  const apiUrl:any = process.env.SITE_URL;
  const username = process.env.MY_USERNAME;
  const password = process.env.PASSWORD;
  const customerId= "SCBW FOUNDATION";
//   const callbackUrl = "https://localhost:3000/success";
  // Define API URL (Test mode or Live mode)
  // const testMode = process.env.TEST_MODE === "true";
  // const apiUrl = testMode
  //   ? "https://demo-ipg.ctdev.comtrust.ae:2443/"
  //   : "https://ipg.comtrust.ae:2443/";

  // Create Finalization Payload
  const payload = {
    Finalization: {
      TransactionID: TransactionID,
    //   ReturnPath: callbackUrl,
      Customer: customerId,
      UserName: username,
      Password: password,
    },
  };

  try {
    // Send the finalization request
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const textResponse = await response.text();
    console.log("Raw Finalization API Response:", textResponse);

    // Validate response (check if it's empty)
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

    // Handle Errors from API Response
    if (!data?.Transaction || data.Transaction.ResponseCode !== "0") {
      return res.status(400).json({
        error: data?.Transaction?.ResponseDescription || "Unknown error. For more information, please contact your card issuing bank.",
      });
    }

    // Success: Return Transaction Details
    // return res.json({
    //   message: "Payment finalized successfully",
    //   // transactionDetails: data.Transaction,
    // });
    return res.redirect("/payment-success");
  } catch (error) {
    console.error("Finalization error:", error);
    return res.status(500).json({ error: "Payment finalization failed. For more information, please contact your card issuing bank." });
  }
}

