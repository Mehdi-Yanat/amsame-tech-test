import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import StoreProvider from "./StoreProvider";
import ToastProvider from "./ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amsame Tech Test",
  description: "Amsame Tech Test description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider>{children}</ToastProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
