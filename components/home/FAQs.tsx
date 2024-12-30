import React from "react";
import { SectionHeading } from "../ui/Headings";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div className=" bg-[#121212] flex flex-col items-center py-20">
      <SectionHeading
        title="FAQs"
        subtitle="Journeys Shared, Stories Told"
        variant="black"
      />

      <div className="w-[90%] sm:w-[66%] py-10">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="w-full px-4 gap-4 flex flex-col "
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-white/[.12]"
            >
              <AccordionTrigger className="text-white font-semibold text-lg sm:text-xl">
                What is Lorem Ipsum?
              </AccordionTrigger>
              <AccordionContent className="text-white/[.6] text-sm sm:text-base font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
