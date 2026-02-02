import Footer from "./common/footer";
import Navbar from "./common/navbar";
import "./globals.css";
import WhatsAppFloat from "./WhatsAppFloat/page";

export const metadata = {
  title: "Firestick 4K IPTV Packages | Best Streaming Deals",
  description:
    "Get affordable Firestick 4K IPTV packages with live TV, movies, and sports. Easy setup and fast streaming.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
