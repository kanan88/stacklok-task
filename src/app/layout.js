import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stacklok Dashboard",
  description: "A simple dashboard built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="https://stacklok.com/img/favicon.svg?v2"
        sizes="any"
      />

      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
