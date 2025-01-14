import React from "react";
import { Gem } from "lucide-react";
import { SectionHeading } from "../ui/Headings";

const WhyUs = ({ heading, content, parallax }: any) => {
  return (
    <section
      className="h-[150vh] sm:h-[110vh] bg-white flex flex-col bg-fixed bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${parallax.formats.large.url})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-2 sm:max-h-[500px] py-10 bg-white">
        <SectionHeading title="why us" subtitle={heading} variant="white" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-10 p-2">
          {content.map((card: any, index: number) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center justify-center gap-2 w-full sm:w-1/4"
            >
              <span className=" border-white border-[3px] border-solid rounded-full shadow-lg bg-[#D6F3FF] size-[56px] flex items-center justify-center">
                <Gem className="text-main" size={32} />
              </span>
              <p className="text-black text-2xl font-semibold">{card.title}</p>
              <p className="text-black/[.6] text-base font-normal text-center h-[120px]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
