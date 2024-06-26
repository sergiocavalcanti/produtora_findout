import { Inter } from "next/font/google";
import Menu from "./_components/menu";
import Footer from "./_components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Findout",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
