"use client";

import SmoothScroll from "./_components/SmoothScroll";
import "./globals.css";
import TopNav from "./_components/TopNav/TopNav";
import Footer from "./_components/Footer/Footer";
import LoadingScreen from "./_components/LoadingScreen/LoadingScreen";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <LoadingScreen />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
