import type { Metadata } from "next";
import { Space_Grotesk, DM_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
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
      <body className={`${spaceGrotesk.variable} ${dmMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
