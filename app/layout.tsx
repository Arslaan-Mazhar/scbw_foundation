import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({ subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable: '--font-poppins',
 });

export const metadata: Metadata = {
  title: "SCBW Foundation",
  description: "Special Campaign for Blinds Welfare Foundation is serving for blind people.Support the welfare of the visually impaired with SCBW Foundation. Join us in our mission to make a difference.",
  icons: {
       icon: '/logo1.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
