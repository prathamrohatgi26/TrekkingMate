import { Heart, Share, Star, StarHalf, ThumbsUp } from "lucide-react";
import Image from "next/image";
import React from "react";

const TripHeading = () => {
  return (
    <div className="pt-20 pb-10 bg-white">
      <div className="hidden sm:grid grid-cols-12 grid-rows-5 gap-x-2 gap-y-3 h-[400px] max-w-[1200px] mx-auto my-6">
        <span className="flex items-center justify-center overflow-hidden col-span-6 row-span-5 rounded-l-lg">
          <Image
            alt="grid-trips-1"
            src="/images/1.png"
            width={550}
            height={370}
            className="object-cover w-full h-full"
          />
        </span>
        <span className="flex items-center justify-center overflow-hidden col-span-3 row-span-3 ">
          <Image
            alt="grid-trips-2"
            src="/images/2.png"
            width={280}
            height={220}
            className="object-cover w-full h-full"
          />
        </span>
        <span className="flex items-center justify-center overflow-hidden col-span-3 row-span-3 rounded-tr-lg">
          <Image
            alt="grid-trips-3"
            src="/images/3.png"
            width={280}
            height={220}
            className="object-cover w-full h-full"
          />
        </span>
        <span className="flex items-center justify-center overflow-hidden col-span-2 row-span-2">
          <Image
            alt="grid-trips-4"
            src="/images/4.png"
            width={170}
            height={140}
            className="object-cover w-full h-full"
          />
        </span>
        <span className="flex items-center justify-center overflow-hidden col-span-2 row-span-2">
          <Image
            alt="grid-trips-5"
            src="/images/5.png"
            width={170}
            height={140}
            className="object-cover w-full h-full"
          />
        </span>
        <span className="flex items-center justify-center overflow-hidden col-span-2 row-span-2 rounded-br-lg">
          <Image
            alt="grid-trips-6"
            src="/images/6.png"
            width={170}
            height={140}
            className="object-cover w-full h-full"
          />
        </span>
      </div>
      <div className="flex items-center justify-center sm:hidden relative">
        <Image
          src={"/images/1.png"}
          alt="mobile-v"
          className="h-full w-full"
          width={400}
          height={300}
        />
      </div>
      <div className="flex flex-col gap-2 max-w-[1200px] mx-auto mt-6">
        <span className="flex flex-row items-start justify-between">
          <h1 className="font-bold text-5xl text-[#121212]">
            Everest Base Camp Heli Trek - 8 Days
          </h1>
          <span className="flex items-center gap-6">
            <button className="flex items-center gap-2 font-medium text-[#121212]">
              <Share size={20} />
              <p className="underline">Share</p>
            </button>
            <button className="flex items-center gap-2 font-medium text-[#121212]">
              <Heart size={20} />
              <p className="underline">Save</p>
            </button>
          </span>
        </span>
        <span className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-[#121212]">
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <StarHalf size={16} />
            <span className="flex items-center gap-1 text-[#121212]">
              <p className="underline">2630 reviews</p>
              <p>in TripAdvisor</p>
            </span>
          </span>
          <span className="flex items-center gap-2 text-[#121212]">
            <ThumbsUp size={16} />
            Recommended by 99% of travelers
          </span>
        </span>
      </div>
    </div>
  );
};

export default TripHeading;
