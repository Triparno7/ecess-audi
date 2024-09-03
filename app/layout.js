import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ECE Students' Society",
  description: "Generated with love by ECESS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-fit">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <body className={inter.className}>
        <div className="min-w-full">

        <Navbar/>
        </div>
        <div className="min-h-[87vh]  items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] w-full">

        {children}
        </div>
        <Footer/>
        </body>
    </html>
    
  );
}
