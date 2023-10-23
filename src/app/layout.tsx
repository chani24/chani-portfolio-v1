import PageWrapper from "./PageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chidera Ani - Frontend developer",
  description:
    "Frontend developer skilled in building refined web experiences. With a strong design sensibility and up-to-date tech knowledge, Chidera transforms concepts into user-friendly interfaces. Their expertise results in responsive, accessible websites, backed by collaborative teamwork.",
  openGraph: {
    title: "Chidera Ani - Frontend developer",
    description:
      "Frontend developer skilled in building refined web experiences. With a strong design sensibility and up-to-date tech knowledge, Chidera transforms concepts into user-friendly interfaces. Their expertise results in responsive, accessible websites, backed by collaborative teamwork.",
    url: "https://www.chani.dev",
    siteName: "Chidera Ani",
    images: [
      {
        url: "https://www.chani.dev/images/large-og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chidera Ani - Frontend developer",
    description:
      "Frontend developer skilled in building refined web experiences. With a strong design sensibility and up-to-date tech knowledge, Chidera transforms concepts into user-friendly interfaces. Their expertise results in responsive, accessible websites, backed by collaborative teamwork.",
    siteId: "",
    creator: "@_anichidera",
    creatorId: "",
    images: ["https://www.chani.dev/images/large-og.jpg"],
  },
};

export default PageWrapper;
