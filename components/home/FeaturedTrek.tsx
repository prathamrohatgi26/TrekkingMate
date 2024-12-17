import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FeaturedTrekImage from "/public/images/featured-trek.png";

const FeaturedTrek = () => {
  return (
    <div className="w-full bg-black h-auto flex items-center justify-center my-auto px-36 py-20">
      <Image src={FeaturedTrekImage} alt="featured-trek" className="w-1/2" />
      <div className="flex flex-col items-start justify-center gap-2 py-4 px-10 w-1/2">
        <p className="text-white font-semibold text-3xl">Gokyo Lake Trek</p>
        <p className="text-white/[.6]">
          The Gokyo Lake trek is a celebrated journey renowned for its
          breathtaking views and rich cultural experiences. This trek offers
          stunning vistas of some of Nepal’s most iconic 8,000-meter...
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
