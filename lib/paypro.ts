export async function getPayProToken() {
  const response = await fetch(`${process.env.PAYPRO_BASE_URL}/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      clientId: process.env.PAYPRO_CLIENT_ID,
      clientSecret: process.env.PAYPRO_CLIENT_SECRET,
    }),
  });

  const raw = await response.text();
  console.log("PayPro Token Raw Response:", raw);

  if (!response.ok) {
    throw new Error("Failed to fetch PayPro token: " + raw);
  }

  const data = JSON.parse(raw);
  return data.token; // adjust if PayPro returns { token: "xxx" }
}
