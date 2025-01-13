import React from "react";
import { Button } from "../ui/button";

const NewsLetter = async () => {
  const homepageData = await fetch(
    "https://api.trekkingmate.com/api/homepage?populate=*"
  );

  const { data } = await homepageData.json();

  return (
    <div
      className="min-h-[45vh] w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-[40px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 6, 0.5)), url(${data.heroBackground.formats.large.url}`,
      }}
    >
      <p className="text-3xl sm:text-5xl text-white font-semibold text-center">
        Stay Updated with the Adventure!
      </p>
      <div className="relative w-[90%] sm:max-w-[540px] h-[56px] flex flex-col gap-6 sm:gap-0 items-center justify-center">
        <input
          type="text"
          placeholder="type your email address..."
          className="w-full h-full rounded-3xl min-h-[48px] text-black placeholder:text-[#B3B3B3] placeholder:italic px-2 "
        />
        <Button className="sm:absolute top-1/2 -translate-y-1/2 right-1 rounded-3xl px-4 py-2 font-medium w-[120px] h-[48px]">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default NewsLetter;
