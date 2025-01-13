"use client";
import React, { Fragment } from "react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { DateRange } from "react-day-picker";
import Image from "next/image";
import ReviewCard from "../card/ReviewCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const TripContent = ({ data }: any) => {
  const [date, setDate] = React.useState<DateRange | undefined>();

  // Parse the markdown content to extract sections
  const sections = data.description
    .split("#")
    .filter(Boolean)
    .reduce((acc: any, section: any) => {
      const [title, ...content] = section.split("\n").filter(Boolean);
      acc[title.trim().toLowerCase()] = content.join("\n").trim();
      return acc;
    }, {});

  const getHighlights = () => {
    const highlightsContent =
      sections["trek highlights"] || sections["highlights"];
    return highlightsContent
      ?.split("-")
      .filter(Boolean)
      .map((highlight: string) => highlight.trim());
  };

  const highlights = getHighlights();

  return (
    <div className="bg-white max-w-[1200px] mx-auto flex flex-row items-start gap-2 relative pb-20">
      <div
        className="fixed bottom-0 left-0 bg-white rouned-t-md h-[80px] sm:hidden flex items-center justify-between w-full px-5 rounded-t-xl z-50"
        style={{ boxShadow: "0px 0px 12px 0px #00000029" }}
      >
        <span className="flex flex-col gap-1 text-[#121212]">
          <p className="text-base font-bold">USD {data.price || "2,250"}</p>
          <p className="text-sm">per person</p>
        </span>
        <Button className="rounded-2xl px-5 py-3 font-medium w-[250px]">
          Book Now
        </Button>
      </div>
      <div className="w-full px-4 sm:px-0 sm:w-3/4 h-full text-[#121212] flex flex-col gap-2">
        <h2 className="font-semibold text-2xl sm:text-3xl py-2">Overview</h2>
        <div className="whitespace-pre-wrap">
          {sections["trip introduction"]}
        </div>

        <h2 className="font-semibold text-2xl sm:text-3xl py-2">Highlights</h2>
        <ul className="flex flex-col gap-1 pb-4">
          {highlights?.map((highlight: string, index: number) => (
            <li key={index} className="flex items-center gap-2">
              <Image
                src="/images/Rectangle 1.png"
                alt="bullet"
                height={10}
                width={10}
                className="flex-shrink-0"
              />
              {highlight}
            </li>
          ))}
        </ul>

        <span className="w-full flex flex-col sm:flex-row sm:items-center sm:gap-16">
          <h2 className="font-semibold text-2xl sm:text-3xl py-2">
            Duration & Availability
          </h2>
          <p className="font-medium text-[#717171] hidden sm:block">
            Trip duration:{" "}
            {sections["short itinerary"]?.split("\n").length || 8} days
          </p>
        </span>
        <p>
          Check real-time availability and secure your spot on the journey of a
          lifetime.
        </p>
        <span className="border rouned-md p-2 w-max my-2 mx-auto sm:mx-0">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </span>
        <span className="flex items-center gap-2">
          <span className="size-[20px] rounded-full flex-shrink-0 bg-[#D9D9D9]" />
          Sold out dates
        </span>

        <span className="sm:hidden flex h-auto mx-auto my-4 bg-[#00B2FF29] rounded-md flex-col p-5 gap-4">
          <p className="text-[#121212] font-semibold text-xl">
            See What Awaits You
          </p>
          <p className="text-[#121212] text-sm">
            Get all the details you need to make your dream trip a reality
          </p>
          <button className="w-full rounded-2xl border-[1.5px] border-[#121212] border-solid py-1 text-lg font-medium">
            Download Brochure
          </button>
        </span>

        <h2 className="font-semibold text-2xl sm:text-3xl my-2">Itinerary</h2>
        <div className="whitespace-pre-wrap font-medium">
          {sections["short itinerary"]}
        </div>

        <h2 className="font-semibold text-3xl my-2">
          Journeys Shared, Stories Told
        </h2>
        <div className="flex sm:flex-row flex-col items-center gap-2">
          {[1, 2, 3].map((index) => (
            <Fragment key={index}>
              <ReviewCard />
            </Fragment>
          ))}
        </div>

        <h2 className="font-semibold text-2xl sm:text-3xl mt-4 mb-2 sm:my-2">
          Got Questions? We've Got Answers!
        </h2>
        <div className="w-[90%] sm:w-[80%] mx-auto sm:mx-0 py-2">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full gap-2 sm:gap-4 flex flex-col"
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none"
              >
                <AccordionTrigger className="text-[#121212] font-semibold text-lg sm:text-xl">
                  What is Lorem Ipsum?
                </AccordionTrigger>
                <AccordionContent className="text-[#121212]/[.6] text-sm sm:text-base font-normal">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="w-1/4 hidden sticky top-5 h-[200px] border-2 border-[#d9d9d9] border-solid sm:flex flex-col gap-3 items-center justify-center p-4 rounded-lg">
        <span className="text-[#121212] font-bold text-3xl flex gap-1">
          USD {data.price || "2,250"}{" "}
          <p className="text-base font-normal leading-9">/ person</p>
        </span>
        <Button className="w-full rounded-3xl font-medium py-2">
          Book Now
        </Button>
        <button className="font-medium border-2 border-[#121212] text-[#121212] rounded-3xl w-full py-2">
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default TripContent;
