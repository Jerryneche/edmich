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
/*
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edmich Autoplux | Nigeria's trusted B2B AUto Parts Marketplace",
  description: "Edmich Autoplux connects verified buyers, sellers, and mechanics across Nigeria. Buy genuine spare parts, streamline logistics, and access trusted auto solutions- all in one platform", 
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
*/

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edmich Autoplux | Nigeria's Trusted B2B Auto Parts Marketplace",
  description:
    "Edmich Autoplux connects verified buyers, sellers, and mechanics across Nigeria. Buy genuine spare parts, streamline logistics, and access trusted auto solutions — all in one platform.",
  keywords: [
    "auto parts",
    "B2B marketplace",
    "mechanics in Nigeria",
    "spare parts",
    "automobile logistics",
    "Edmich Autoplux",
  ],
  icons: {
    icon: "/edmich3.jpeg",
    shortcut: "/edmich2.jpeg",
    apple: "/edmich1.jpeg",
  },
  openGraph: {
    title: "Edmich Autoplux | B2B Auto Parts Marketplace",
    description:
      "Connect with trusted buyers, sellers, and mechanics. Get genuine parts and logistics in one place.",
    url: "https://www.edmich.com/autoplux", // replace with your actual domain later
    siteName: "Edmich Autoplux",
    images: [
      {
        url: "/edmich1.jpeg", // add this later for sharing preview
        width: 1200,
        height: 630,
        alt: "Edmich Autoplux Platform",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
