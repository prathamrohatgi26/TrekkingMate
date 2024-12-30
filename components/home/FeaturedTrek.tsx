import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FeaturedTrekImage from "/public/images/featured-trek.png";

const FeaturedTrek = () => {
  return (
    <div className="w-full bg-[#121212] h-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 my-auto sm:px-36 py-20">
      <Image
        src={FeaturedTrekImage}
        alt="featured-trek"
        className="w-[90%] sm:w-1/2 object-contain"
      />
      <div className="flex flex-col items-center sm:items-start justify-center gap-2 py-4 px-10 sm:w-1/2">
        <p className="text-white font-semibold text-3xl">Gokyo Lake Trek</p>
        <p className="text-white/[.6] text-center sm:text-start">
          The Gokyo Lake trek is a celebrated journey renowned for its
          breathtaking views and rich cultural experiences. This trek offers
          stunning vistas of some of Nepal's most iconic 8,000-meter...
        </p>
        <Button
          variant="default"
          className="px-6 py-3 text-base w-[120px] h-[48px] rounded-[120px] mt-2"
        >
          <p>Know More</p>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedTrek;
