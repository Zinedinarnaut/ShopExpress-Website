import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopExpress",
  description: "Your one-stop e-commerce API for seamless user management, product catalog, shopping cart, and secure payments. Simplify development and elevate your online shopping experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(19 78 74)",
              color: "rgb(250 250 250)",
              fontWeight: 200,
              border: "1px solid rgb(13 148 136 / 0.4)",
            },
          }}
          position="bottom-right"
        />
      </body>
    </html>
  );
}
