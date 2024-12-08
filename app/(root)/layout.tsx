"use client"
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { AuthProvider } from "@/context/AuthContext";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <AuthProvider>
        <div className="flex h-screen flex-col md:py-2 md:my-2">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      </AuthProvider>
    );
  }