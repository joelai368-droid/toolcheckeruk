import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToolCheckerUK — Compare Power Tool Prices Across UK Retailers",
  description: "Find the best prices on power tools from Screwfix, Toolstation, Amazon UK, FFX, ITS and more. Compare prices, stock and delivery for Milwaukee, DeWalt, Makita, Bosch and other top brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="-EjcRYX3X_NGUHZI2THJf6U-XPNaYRfrHgFpjoLk8iY"
        />
      </head>
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ background: "#0C0C0E", margin: 0, padding: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
