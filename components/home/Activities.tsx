"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/Headings";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Link from "next/link";

const Activities = ({ tourData }: any) => {
  const [SliderItems, setSliderItems] = useState(
    tourData.map((tour: any, index: number) => ({
      image: tour.image.formats.medium.url,
      title: tour.name,
      desc: `Starting from ₹ ${tour.startsAt}/Person`,
      link: `/tripType/${tour.name?.split(" ")[0]}`,
    }))
  );

  const moveSlider = (direction: "left" | "right") => {
    if (direction === "left") {
      setSliderItems((prev: any) => [...prev.slice(1), prev[0]]);
    } else {
      setSliderItems((prev: any) => [
        prev[prev.length - 1],
        ...prev.slice(0, -1),
      ]);
    }
  };
  return (
    <div className="h-screen bg-[#121212] flex flex-col items-center py-20">
      <SectionHeading
        title="activities we offer"
        subtitle="Unleash the Explorer in You"
        variant="black"
      />

      <div className="w-screen h-full flex items-center justify-center gap-8 mt-10 relative">
        <button
          onClick={() => moveSlider("left")}
          className="absolute z-40 text-white left-2 top-1/2 hover:bg-mainhover -translate-y-1/2 bg-main rounded-full p-2 sm:hidden"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={() => moveSlider("right")}
          className="absolute z-40 text-white right-2 top-1/2 hover:bg-mainhover -translate-y-1/2 bg-main rounded-full p-2 sm:hidden"
        >
          <ArrowRight />
        </button>
        <Carousel className="w-full overflow-clip">
          <CarouselContent className="w-full flex flex-row justify-center items-center">
            {SliderItems.map((item: any, index: number) => (
              <CarouselItem
                key={index}
                className={` relative cursor-pointer sm:basis-1/3 ${
                  index === 1
                    ? "max-w-[80%] sm:max-w-[400px] max-h-[550px] h-[550px] w-[30%]"
                    : "max-w-[320px] max-h-[450px] h-[450px] w-[25%]"
                }`}
              >
                {index === 0 && (
                  <button
                    onClick={() => moveSlider("left")}
                    className="absolute z-40 text-white -left-4 top-1/2 hover:bg-mainhover -translate-y-1/2 bg-main rounded-full p-2 sm:flex hidden"
                  >
                    <ArrowLeft />
                  </button>
                )}
                {index === 2 && (
                  <button
                    onClick={() => moveSlider("right")}
                    className="absolute z-40 text-white -right-6 top-1/2 hover:bg-mainhover -translate-y-1/2 bg-main rounded-full p-2 sm:flex hidden"
                  >
                    <ArrowRight />
                  </button>
                )}
                <div className="flex flex-col items-center justify-center w-full h-full rounded-xl overflow-hidden">
                  <div className="overflow-hidden h-full w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={200}
                      height={300}
                      className="object-cover h-full w-full hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className=" text-white h-[150px] flex flex-col gap-1 bg-[#202020] w-full px-4 py-6">
                    <h3 className="text-xl font-bold ">{item.title}</h3>
                    <p className="">{item.desc}</p>
                    <Link
                      // onClick={() => router.push(item.link)}
                      href={item.link}
                      className="text-main text-sm self-start border-b-2 border-transparent border-solid hover:border-b-main transition-all duration-300"
                    >
                      Know More
                    </Link>
                  </div>
                </div>
                {/* </div> */}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Activities;
