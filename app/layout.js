import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Twisted Stitch",
  description: "Wearable Artwork - One and only"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"min-h-screen flex flex-col relative" + inter.className}>
        <header className="sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8">
          Header
        </header>
        <div className="flex-1">{children}</div>
        <footer>FOOTER</footer>
      </body>
    </html>
  );
}
