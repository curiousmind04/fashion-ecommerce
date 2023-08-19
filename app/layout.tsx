import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
// import classes from "./layout.module.css";
import ClientOnly from "./components/ClientOnly";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FashionVista",
  description: "Fashion stores for business owners",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
        </ClientOnly>
        <div>{children}</div>
      </body>
    </html>
  );
}
