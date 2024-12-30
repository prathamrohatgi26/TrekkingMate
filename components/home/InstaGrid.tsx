"use client";
import React, { useState, useEffect } from "react";
import { SectionHeading } from "../ui/Headings";
import { Button } from "../ui/button";

const InstaGrid = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleItems, setVisibleItems] = useState(isMobile ? 3 : 9);

  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-teal-500",
    "bg-indigo-500",
    "bg-red-500",
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setVisibleItems(window.innerWidth < 768 ? 3 : 9);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleShowMore = () => {
    setVisibleItems((prev) => Math.min(prev + 3, 9));
  };

  return (
    <div className="bg-white flex flex-col items-center py-10">
      <SectionHeading
        title="Instagram Chronicle"
        subtitle="From Trails to Feeds"
        variant="white"
      />
      <div className="w-[80%] py-10 grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center p-2">
        {Array.from({ length: visibleItems }).map((_, index) => (
          <span
            className={`flex-1 w-full size-[300px] ${colors[index]}`}
            key={index}
          />
        ))}
      </div>
      {visibleItems < 9 && (
        <Button onClick={handleShowMore} className="rounded-2xl">
          Load More
        </Button>
      )}
    </div>
  );
};

export default InstaGrid;
