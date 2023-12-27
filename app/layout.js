import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./Header";
//import localFont from "@next/font/local";

const inter = Inter({ subsets: ["latin"] });

// const myFont = localFont({
//   src: "/Library/Fonts/zsynorEBO.ttf"
// });

export const metadata = {
  title: "Twisted Stitch",
  description: "Wearable Artwork - One and only"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={"min-h-screen flex flex-col relative" + inter.className}>
        <Header></Header>
        <div className="flex-1">{children}</div>
        <footer className="flex items-center flex-wrap justify-center border-t-2 border-solid border-indigo-900 p-4 md:p-8">
          <i className="fa-brands fa-square-instagram text-slate-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl"></i>
        </footer>
        <div id="portal"></div>
      </body>
    </html>
  );
}
