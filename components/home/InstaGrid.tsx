import React from "react";
import { SectionHeading } from "../ui/Headings";

const InstaGrid = () => {
  return (
    <div className="bg-white flex flex-col items-center py-10">
      <SectionHeading
        title="Instagram Chronicle"
        subtitle="From Trails to Feeds"
        variant="white"
      />
      <div className="w-[80%] py-10 grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center p-2">
        {Array.from({ length: 9 }).map((_, index) => {
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
          return (
            <span
              className={`flex-1 w-full size-[300px] ${colors[index]}`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InstaGrid;
