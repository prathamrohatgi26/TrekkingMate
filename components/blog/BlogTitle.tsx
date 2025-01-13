import React from "react";
import Image from "next/image";

const BlogTitle = ({ title, publishedAt }: any) => {
  const categories = [
    { name: "General", color: "bg-[#4C7AB6]/[.24]", text: "text-[#4c7ab6]" },
    {
      name: "Life Time Experience",
      color: "bg-[#E4C000]/[.24]",
      text: "text-[#E4C000]",
    },
    {
      name: "Life Style",
      color: "bg-[#8A2BE2]/[.24]",
      text: "text-[#8A2BE2]",
    },
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  return (
    <div className="sm:mx-20 flex flex-col gap-4 items-center justify-center py-10 sm:py-16 border-b border-solid border-[#d9d9d9]">
      <span className="w-auto px-3 py-2 bg-[#8A2BE23D] text-sm font-medium text-[#8A2BE2] rounded-2xl">
        (category)
      </span>
      <h1 className="text-3xl sm:text-5xl text-[#121212] font-bold text-center">
        {/* Teahouses in Annapurna Region; Things You Need to Know */}
        {title}
      </h1>
      <span className="flex flex-col sm:flex-row items-center gap-4 text-[#12121299] font-medium">
        <p>
          Published on <b>{formatDate(publishedAt)}</b>
        </p>
        <span className="sm:w-px h-[2px] w-full   sm:h-[20px] bg-[#D9D9D9] flex-shrink-0 flex" />
        <p className="flex items-center gap-2">
          Share on :
          <Image
            src="/images/messenger.png"
            alt="messenger"
            height={24}
            width={24}
          />
          <Image
            src="/images/twitter.png"
            alt="twitter"
            height={24}
            width={24}
          />
          <Image
            src="/images/facebook.png"
            alt="facebook"
            height={24}
            width={24}
          />
          <Image
            src="/images/whatsapp.png"
            alt="whatsapp"
            height={24}
            width={24}
          />
        </p>
      </span>
    </div>
  );
};

export default BlogTitle;
