/*
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Edmich International — Innovation. Access. Connectivity. Growth.",
  description: "Premium digital experiences across industries at Edmich International.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-black text-white">
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}*/

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edmich International",
  description: "Innovation. Access. Connectivity. Growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
