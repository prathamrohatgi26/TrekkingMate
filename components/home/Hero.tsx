import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const Hero = ({ res }: any) => {
  return (
    <section className="overflow-hidden relative">
      <div className="bg-hero bg-cover bg-center bg-no-repeat herozoom h-screen absolute top-0 left-0 right-0" />
      <div className="flex flex-col gap-6 sm:gap-4 items-center justify-center h-screen z-20 relative p-2 sm:p-0">
        <h1 className="text-5xl sm:text-7xl font-bold text-white text-center">
          {res?.heroHeading ?? "Unlock Your Wanderlust"}
        </h1>
        <p className=" text-xl sm:text-2xl text-white text-center">
          {res?.heroSubHeading ??
            "Discover destinations that inspire and experiences that excite"}
        </p>
        <div className="relative w-full sm:w-1/2 flex justify-center items-center mt-6">
          <input
            type="text"
            placeholder="Search trips ..."
            className="w-full p-2 rounded-[120px] h-[60px] sm:h-[68px] text-black placeholder:text-[#CBCBCB] bg-white text-lg pl-4"
          />
          <Button
            variant="default"
            className="hidden sm:flex absolute top-1/2 right-4 transform -translate-y-1/2 text-lg w-[120px] h-[48px] rounded-[120px] p-2"
          >
            Search
          </Button>

          <button className="rounded-full p-2 bg-main text-black absolute right-2 top-1/2 -translate-y-1/2 sm:hidden">
            <Search size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
