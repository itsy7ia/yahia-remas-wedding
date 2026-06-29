import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-title",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "YR",
  description: "Wedding Invitation",

  applicationName: "YR",

  authors: [
    {
      name: "Yahia & Remas",
    },
  ],

  creator: "Yahia",
  publisher: "Yahia & Remas",

  openGraph: {
    title: "Yahia & Remas",
    description: "Wedding Invitation",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yahia & Remas",
    description: "Wedding Invitation",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}