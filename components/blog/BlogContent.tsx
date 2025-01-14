"use client";
import React, { useState } from "react";
import Image from "next/image";
import dummy from "/public/images/Cover.png";
import ReactMarkdown from "react-markdown";

const BlogContent = ({ data }: any) => {
  const [selectedHeading, setSelectedHeading] = useState(0);
  // const headings = [
  //   "Rooms and Beds",
  //   "Toilets and Showers",
  //   "Electricity, Charging Points and Wi-Fi",
  //   "Food and Dining hall",
  // ];

  const contentSections = data.content.split("\n## ").filter(Boolean);
  return (
    <div className="h-auto w-full bg-white pt-16 max-w-screen-lg mx-auto">
      <p className="text-[#121212] text-center">
        {/* Annapurna region is the second most trekked region after the Khumbu
        area. Recently, few of the areas in the Annapurna Circuit has been
        accessed by motorable roads. With the huge flow of the tourists hitting
        to the Annapurna region there are hundreds of teahouses built in the
        trails here. For the travelers willing to do */}
        {data.summary}
      </p>
      <Image
        src={data.image.formats.medium.url}
        className="h-full w-full object-cover rounded-xl mt-10"
        alt="main-img"
        width={data.image.formats.medium.width}
        height={data.image.formats.medium.height}
      />
      <div className="w-full flex flex-row py-10">
        <div className="w-1/5 hidden sm:block">
          <div className="flex flex-col">
            {/* {headings.map((item, index) => (
              <button
                key={index}
                className={`border-l-2 border-solid w-full h-[50px] p-2.5 text-sm text-start ${
                  selectedHeading === index
                    ? "font-semibold border-main text-[#121212]"
                    : "text-[#121212]/60"
                }`}
              >
                {item}
              </button>
            ))} */}

            <div className="mt-4">
              <h3 className="text-sm tect-[#717171] font-medium mb-4">
                Share on:
              </h3>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-80">
                  <Image
                    src="/images/messenger.png"
                    alt="messenger"
                    height={24}
                    width={24}
                  />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Image
                    src="/images/twitter.png"
                    alt="twitter"
                    height={24}
                    width={24}
                  />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Image
                    src="/images/facebook.png"
                    alt="facebook"
                    height={24}
                    width={24}
                  />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Image
                    src="/images/whatsapp.png"
                    alt="whatsapp"
                    height={24}
                    width={24}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-4/5 flex-col flex items-start justify-start gap-4">
          {/* {headings.map((item, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <h2 className="text-[#121212] font-semibold text-3xl mt-4">
                {item}
              </h2>
              <p>
                Talking about the rooms in guesthouses, they are facilitated
                with two or three twin beds. Sometimes there is the availability
                of a table, a small cupboard as well. The rooms are neat and
                tidy however if cleanliness is what bugs you, carrying the
                sleeping bag always helps. The rooms are cozy, the bedding is
                good with a pillow and a blanket. Occasionally in some of the
                guesthouses, there are dormitory styled rooms as well where the
                rooms must be shared by few travelers.
              </p>
             <Image
                src={dummy}
                className="h-full w-full object-cover rounded-xl"
                alt="main-img"
              /> 
            </div>
          ))} */}
          {contentSections.map((section: any, index: any) => (
            <div className="flex flex-col gap-2" key={index}>
              <h2 className="text-[#121212] font-semibold text-3xl mt-4 text-center sm:text-start">
                {section.split("\n")[0].replace("## ", "")}
              </h2>
              <ReactMarkdown className="text-center sm:text-start whitespace-pre-wrap">
                {section.split("\n").slice(1).join("\n")}
              </ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
