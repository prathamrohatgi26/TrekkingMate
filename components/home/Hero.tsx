import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="bg-hero bg-cover bg-center bg-no-repeat herozoom h-screen absolute top-0 left-0 right-0" />
      <div className="flex flex-col gap-4 items-center justify-center h-screen z-20 relative">
        <h1 className="text-7xl font-bold text-white">
          Unlock Your Wanderlust
        </h1>
        <p className="text-2xl text-white">
          Discover destinations that inspire and experiences that excite
        </p>
        <div className="relative w-1/2 flex justify-center items-center mt-6">
          <input
            type="text"
            placeholder="Search trips ..."
            className="w-full p-2 rounded-[120px] h-[68px] text-black placeholder:text-[#CBCBCB] bg-white text-lg pl-4"
          />
          <Button
            variant="default"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-lg w-[120px] h-[48px] rounded-[120px] p-2"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
