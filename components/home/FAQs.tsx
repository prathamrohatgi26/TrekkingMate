import React from "react";
import { SectionHeading } from "../ui/Headings";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ReactMarkdown from "react-markdown";

const FAQs = async () => {
  const FaqFetch = await fetch(`https://api.trekkingmate.com/api/faqs`);

  const data: any = await FaqFetch.json();

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
          {data?.data?.map((item: any, index: number) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-white/[.12]"
            >
              <AccordionTrigger className="text-white font-semibold text-lg sm:text-xl">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <ReactMarkdown className="text-center sm:text-start whitespace-pre-wrap text-white">
                  {item.description}
                </ReactMarkdown>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
