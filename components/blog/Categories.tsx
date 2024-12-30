import React from "react";
import { SectionHeading } from "../ui/Headings";

const Categories = () => {
  const categories = [
    { name: "General", color: "bg-[#4C7AB6]/[.24]", text: "text-[#4c7ab6]" },
    {
      name: "Life Time Experience",
      color: "bg-[#E4C000]/[.24]",
      text: "text-[#E4C000]",
    },
    { name: "Life Style", color: "bg-[#8A2BE2]/[.24]", text: "text-[#8A2BE2]" },
    {
      name: "Flora & Fauna",
      color: "bg-[#228B22]/[.24]",
      text: "text-[#228B22]",
    },
    { name: "Festival", color: "bg-[#FF6347]/[.24]", text: "text-[#FF6347]" },
    {
      name: "Community Support",
      color: "bg-[#00CED1]/[.24]",
      text: "text-[#00CED1]",
    },
    {
      name: "Charitable Cause",
      color: "bg-[#FF69B4]/[.24]",
      text: "text-[#FF69B4]",
    },
    {
      name: "Awards and Achievements",
      color: "bg-[#858585]/[.24]",
      text: "text-[#858585]",
    },
    {
      name: "Ask an Expert",
      color: "bg-[#1E90FF]/[.24]",
      text: "text-[#1E90FF]",
    },
    {
      name: "Adventure and Fun",
      color: "bg-[#FFA500]/[.24]",
      text: "text-[#FFA500]",
    },
    {
      name: "Manaslu Circuit Trek",
      color: "bg-[#A52A2A]/[.24]",
      text: "text-[#A52A2A]",
    },
    {
      name: "Annapurna Base Camp Trek",
      color: "bg-[#4682B4]/[.24]",
      text: "text-[#4682B4]",
    },
    {
      name: "Everest Base Camp Trek",
      color: "bg-[#53C2EF]/[.24]",
      text: "text-[#53C2EF]",
    },
    {
      name: "Kailash Mansarovar Yatra",
      color: "bg-[#937A08]/[.24]",
      text: "text-[#937A08]",
    },
  ];

  return (
    <div className="flex flex-col gap-2 py-20 max-w-screen-lg mx-auto items-center justify-center bg-white">
      <SectionHeading
        title="Categories"
        subtitle="Browse by Categories"
        variant="white"
      />
      <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-5 mt-10">
        {categories.map((category, index) => (
          <span
            key={index}
            className={`px-4 py-1 rounded-full cursor-pointer ${category.color} ${category.text}`}
          >
            {category.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categories;
