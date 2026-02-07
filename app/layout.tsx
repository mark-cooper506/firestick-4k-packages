import Script from "next/script";
import Footer from "./common/footer";
import Navbar from "./common/navbar";
import "./globals.css";
import WhatsAppFloat from "./WhatsAppFloat/page";

export const metadata = {
  title: "Firestick 4K !pt¥ Packages | Best Streaming Deals",
  description:
    "Get affordable Firestick 4K !pt¥ packages with live TV, movies, and sports. Easy setup and fast streaming.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
           {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JZ60HEPGHW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JZ60HEPGHW');
          `}
        </Script>
      <body suppressHydrationWarning className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
