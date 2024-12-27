import React from "react";
import { SectionHeading } from "../ui/Headings";
import TripLogo from "/public/images/triplogo.png";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ReviewCard from "../card/ReviewCard";

const Reviews = () => {
  return (
    <div className="h-auto bg-white flex flex-col items-center py-20">
      <SectionHeading
        title="Traveler Reviews"
        subtitle="Journeys Shared, Stories Told"
        variant="white"
      />

      <span className="flex items-center gap-1 mt-4 text-black font-bold text-2xl">
        <Image
          src={TripLogo}
          alt="triplogo"
          className="size-[40px] object-contain"
        />
        TripAdvisor
      </span>

      <div className="w-3/4 my-10 relative h-full">
        {/* review slider */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full relative px-2"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <ReviewCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -bottom-10 right-1/2 mr-1" />
          <CarouselNext className="absolute -bottom-10 left-1/2 ml-1" />
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
