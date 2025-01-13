"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FeaturedTrekImage from "/public/images/featured-trek.png";
import { InstagramEmbed } from "react-social-media-embed";

const FeaturedTrek = () => {
  const [trek, setTrek] = useState({ title: "", description: "", link: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.trekkingmate.com/api/shoutouts"
        );
        const result = await response.json();
        setTrek(result?.data?.[0]);
      } catch (error) {
        console.error("Error fetching trek data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full bg-[#121212] h-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 my-auto sm:px-36 py-20">
      <InstagramEmbed url={trek.link} width={330} height={500} />
      <div className="flex flex-col items-center sm:items-start justify-center gap-2 py-4 px-10 sm:w-1/2">
        <p className="text-white font-semibold text-3xl">{trek?.title}</p>
        <p className="text-white/[.6] text-center sm:text-start">
          {trek?.description}
        </p>
        <Button
          variant="default"
          className="px-6 py-3 text-base w-[120px] h-[48px] rounded-[120px] mt-2"
          onClick={() => window.open(trek.link, "_blank")}
        >
          <p>Know More</p>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedTrek;
