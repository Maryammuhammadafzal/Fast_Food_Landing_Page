import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="w-full h-[90px]  flex justify-center items-center">
       <header className="md:w-[85%] w-full flex justify-center items-center h-auto">
      <div className="w-full h-auto flex items-center justify-between px-6 md:px-7 lg:px-15">
        <div className="logo w-auto h-auto flex items-center gap-5">
          <div className="menu-icon text-white md:hidden flex justify-center items-center">
            <MenuIcon size={30} />
          </div>
         <p className="font-bold sm:text-3xl text-2xl text-white">LOGO</p>
        </div>
        <div className="tabs w-auto h-auto flex justify-center items-center">
          <ul className=" justify-center items-center md:flex hidden lg:gap-11 md:gap-4 w-auto uppercase h-auto sunflower text-white xl:pr-10">
            <li>
              <Link
                href="/"
                className="hover:bg-primary px-5 py-[6px] focus:bg-primary text-base hover:font-semibold focus-font-semibold active:font-semibold active:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:bg-primary px-5 py-[6px] focus:bg-primary text-base hover:font-semibold focus-font-semibold active:font-semibold active:text-primary"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:bg-primary px-5 py-[6px] focus:bg-primary text-base hover:font-semibold focus-font-semibold active:font-semibold active:text-primary"
              >
                Deal
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:bg-primary px-5 py-[6px] focus:bg-primary text-base hover:font-semibold focus-font-semibold active:font-semibold active:text-primary"
              >
                Contact Us
              </Link>
            </li>
            <div className="button">
              <Button className="rounded-none bg-secondary hover:bg-primary">Order Now</Button>
            </div>
          </ul>
          <div className="button md:hidden block">
              <Button className="rounded-none  max-sm:w-[130px] bg-secondary hover:bg-primary">Order Now</Button>
            </div>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;
