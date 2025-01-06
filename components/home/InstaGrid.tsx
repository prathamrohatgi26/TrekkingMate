"use client";
import React, { useEffect, useState } from "react";
import { SectionHeading } from "../ui/Headings";
import { Button } from "../ui/button";
import { InstagramEmbed } from "react-social-media-embed";

const InstaGrid = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleItems, setVisibleItems] = useState(isMobile ? 3 : 9);
  const [wait5ms, setWait5ms] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setWait5ms(true);
    }, 500);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setVisibleItems(window.innerWidth < 768 ? 3 : 9);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Store just the post IDs
  const instagramPosts = [
    "DEZIQDyzuov",
    "DEXTjS5zR8h",
    "DESiBiGzFDp",
    "DDtuHhHtzBo",
    "DDsB87ZzZG-",
    "DDhWWUbzwsn",
    "DDd32LfTgt2",
    "DAnM_AotCy0",
    "C_hKsYrqcC8",
  ];

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
        {wait5ms &&
          instagramPosts.slice(0, visibleItems).map((postId) => (
            <div
              style={{ display: "flex", justifyContent: "center" }}
              key={postId}
            >
              <InstagramEmbed
                url={`https://www.instagram.com/p/${postId}/`}
                width={330}
                height={500}
              />
            </div>
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
