// app/layout.tsx
"use client";

import Footer from "./common/footer";
import Navbar from "./common/navbar";
import './globals.css'; // ✅ Global CSS
import WhatsAppFloat from "./WhatsAppFloat/page";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />  {/* Navbar globally */}
        {children}  {/* Pages content */}
          <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
