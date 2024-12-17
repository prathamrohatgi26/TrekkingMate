import React from "react";
import { Gem } from "lucide-react";
import { SectionHeading } from "../ui/Headings";

const WhyUs = () => {
  const cardContent = [
    {
      title: "Local Himalayan Experts",
      description:
        "Dedicated local professionals are primarily based in our travel destinations and work exclusively for Ace the Himalaya to give you an authentic Himalayan experience.",
    },
    {
      title: "Safety Above All",
      description:
        "Your safe and secure trip is our top priority. Fully health-trained guides and staff take care of you throughout the journey.",
    },
    {
      title: "Unbeatable Value",
      description:
        "We at Ace the Himalaya carefully curate our itineraries with the best possible services to guarantee that we provide you with the best trip that is value for money.",
    },
  ];
  return (
    <section className="h-screen bg-white flex flex-col bg-activities bg-fixed bg-center bg-no-repeat">
      <div className="flex flex-col items-center justify-center gap-2 max-h-[500px] py-10 bg-white">
        <SectionHeading
          title="why us"
          subtitle="What Makes Us Different"
          variant="white"
        />
        <div className="flex items-center justify-center gap-6 mt-10">
          {cardContent.map((card, index) => (
            <div
              key={index}
              className="bg-white flex flex-col items-center justify-center gap-2 w-1/4"
            >
              <span className=" border-white border-[3px] border-solid rounded-full shadow-lg bg-[#D6F3FF] size-[56px] flex items-center justify-center">
                <Gem className="text-main" size={32} />
              </span>
              <p className="text-black text-2xl font-semibold">{card.title}</p>
              <p className="text-black/[.6] text-base font-normal text-center h-[120px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
