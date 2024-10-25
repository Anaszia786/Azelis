import React from "react";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

interface Props {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props): React.ReactElement {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
