import React from "react";
import { Button } from "../ui/button";

const NewsLetter = () => {
  return (
    <div className="min-h-[45vh] w-full bg-newsletter bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-[40px]">
      <p className="text-5xl text-white font-semibold">
        Stay Updated with the Adventure!
      </p>
      <div className="relative min-w-[540px] h-[56px]">
        <input
          type="text"
          placeholder="type your email address..."
          className="w-full h-full rounded-3xl text-black placeholder:text-[#B3B3B3] placeholder:italic px-2 "
        />
        <Button className="absolute top-1/2 -translate-y-1/2 right-1 rounded-3xl px-4 py-2 font-medium w-[120px] h-[48px]">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default NewsLetter;
