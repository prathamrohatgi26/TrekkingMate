import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="bg-[#121212] h-[72px] absolute top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center h-full mx-[12%]">
        <Image src="/images/White-logo.png" alt="logo" width={76} height={48} />
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white font-semibold text-lg">
            Offerings{" "}
          </Button>
          <Button variant="ghost" className="text-white font-semibold text-lg">
            Why us ?
          </Button>
          <Button variant="ghost" className="text-white font-semibold text-lg">
            About us
          </Button>
          <Button
            variant="outline"
            className="rounded-2xl text-white outline-white bg-transparent font-medium text-lg"
          >
            +977 9876543210
          </Button>
          <Button
            variant="default"
            className="rounded-2xl bg-main text-white font-medium text-lg hover:bg-mainhover "
          >
            Login/ Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
