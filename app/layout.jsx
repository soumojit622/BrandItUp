import { Topbar } from "@/components/Topbar";
import "./globals.css";
import { Afacad_Flux } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { BusinessNameContext } from "@/context/BusinessNameContext";

const Afacad = Afacad_Flux({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "BrandItUp - AI-Powered Business Name Generator",
  description:
    "Discover unique and creative business name ideas effortlessly with BrandItUp. Our AI-powered tool generates tailored names to help you find the perfect brand identity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Afacad.className}`}>
        <BusinessNameContext>
          <Topbar />
          <Toaster />
          {children}
          <Footer />
        </BusinessNameContext>
      </body>
    </html>
  );
}
