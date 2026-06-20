import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const roboto = Roboto({
  variable: "--font-family",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} scroll-smooth`}>
      <body className="font-sans text-primary font-medium leading-normal">
        <Header />
        {children}
      </body>
    </html>
  );
}
