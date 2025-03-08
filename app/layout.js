import {tamil} from "./components/basic/Fonts";
import {inter} from "./components/basic/Fonts";
import "./globals.css";
import Header from "./components/basic/Header";
import Footer from "./components/basic/Footer";
import mainimage from "@/public/banner/1.jpg";



export const metadata = {
  title: "Youth Development Party",
  description: "All India Youth Development Party Website.",
  openGraph: {
    title: "Youth Development Party",
    description: "All India Youth Development Party Website.",
    type: "website",
    url: 'aiydp.in',
    locale: 'en_US',
    images: mainimage,
  },
  authors: [ {
    name: "Jaishanth"},
    {
    name: "Samrith"}
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/icon.png" sizes="any" />
        </head>
      <body
        className={`${tamil.className} ${inter.className}`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
