import type { Metadata } from "next";
import { Poppins, Petit_Formal_Script } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const script = Petit_Formal_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Hochzeit Aline & Louis",
  description: "Digitale Einladung zur Hochzeit von Aline & Louis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={[poppins.className, script.variable].join(" ")}>
        {children}
      </body>
    </html>
  );
}
