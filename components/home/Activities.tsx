"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/Headings";
import Image from "next/image";
import Slider1 from "/public/images/slider1.png";
import Slider2 from "/public/images/slider2.png";
import Slider3 from "/public/images/slider3.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Activities = ({ tourData }: any) => {
  console.log("activitires data", tourData);

  const [SliderItems, setSliderItems] = useState([
    {
      image: Slider2,
      title: "Expedition",
      desc: "Starting from USD 2210/Person",
      link: "",
    },
    {
      image: Slider1,
      title: "Tours",
      desc: "Starting from USD 2210/Person",
      link: "",
    },
    {
      image: Slider3,
      title: "Trekking",
      desc: "Starting from USD 2210/Person",
      link: "",
    },
  ]);

  const moveSlider = (direction: "left" | "right") => {
    if (direction === "left") {
      setSliderItems((prev) => [...prev.slice(1), prev[0]]);
    } else {
      setSliderItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    }
  };
  return (
    <div className="h-screen bg-[#121212] flex flex-col items-center py-20">
      <SectionHeading
        title="activities we offer"
        subtitle="Unleash the Explorer in You"
        variant="black"
      />

      <div className="w-full h-full flex items-center justify-center gap-8 mt-10 relative">
        <Carousel className="w-full">
          <CarouselContent className="w-full flex flex-row justify-center items-center">
            {SliderItems.map((item, index) => (
              <CarouselItem
                key={index}
                className={` relative cursor-pointer basis-1/3 ${
                  index === 1
                    ? "max-w-[400px] max-h-[550px] h-[550px] w-[30%]"
                    : "max-w-[320px] max-h-[450px] h-[450px] w-[25%]"
                }`}
              >
                {/* <div
                  className={` relative cursor-pointer ${
                    index === 1
                      ? "max-w-[400px] max-h-[550px] h-[550px] w-[30%]"
                      : "max-w-[320px] max-h-[450px] h-[450px] w-[25%]"
                  }`}
                > */}
                {index === 0 && (
                  <button
                    onClick={() => moveSlider("left")}
                    className="absolute isolate z-40 text-white -left-6 top-1/2 hover:bg-mainhover -translate-y-1/2 bg-main rounded-full p-2"
                  >
                    <ArrowLeft />
                  </button>
                )}
                {index === 2 && (
                  <button
                    onClick={() => moveSlider("right")}
                    className="absolute z-40 text-white -right-6 top-1/2 hover:bg-mainhover -translate-y-1/2 bg-main rounded-full p-2"
                  >
                    <ArrowRight />
                  </button>
                )}
                <div className="flex flex-col items-center justify-center w-full h-full rounded-xl overflow-hidden">
                  <div className="overflow-hidden h-full w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="object-cover h-full w-full hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <div className=" text-white h-[150px] flex flex-col gap-1 bg-[#202020] w-full px-4 py-6">
                    <h3 className="text-xl font-bold ">{item.title}</h3>
                    <p className="">{item.desc}</p>
                    <button className="text-main text-sm self-start border-b-2 border-transparent border-solid hover:border-b-main transition-all duration-300">
                      Know More
                    </button>
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
