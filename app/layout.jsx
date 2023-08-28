import "./globals.css";

import { Roboto } from "next/font/google";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className + "container m-auto"}>
        <nav className="container mx-auto flex justify-between items-baseline my-5">
          <h3 className=" text-text font-bold text-2xl ml-2">NATOURS</h3>
          <ul className="flex items-baseline gap-3 px-2">
            <li className=" text-text text-lg font-bold md:text-base hidden md:inline cursor-pointer">
              About
            </li>
            <li className=" text-text text-lg font-bold md:text-base hidden md:inline cursor-pointer ">
              Tours
            </li>
            <li className=" text-text text-lg font-bold md:text-base hidden md:inline cursor-pointer">
              About
            </li>
            <li className=" text-text text-lg font-bold md:text-base hidden md:inline cursor-pointer">
              <Link
                href={"/signin"}
                className=" bg-primary-500 p-3 px-4 rounded hover:bg-primary-400 transition-all ease-in-out "
              >
                Sign In
              </Link>
            </li>
            <li className=" text-text text-lg font-bold md:text-base md:hidden cursor-pointer">
              <FaBars />
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
