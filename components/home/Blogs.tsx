import React from "react";
import Blog1 from "/public/images/blog1.png";
import Blog2 from "/public/images/blog2.png";
import Blog3 from "/public/images/blog3.png";
import Image from "next/image";
import { SectionHeading } from "../ui/Headings";
const Blogs = () => {
  const blogs = [
    {
      title: "The Ultimate Guide to Trekking in the Himalayas",
      destination: "NEPAL",
      description: "Discover the best trekking routes in the Himalayas.",
      image: Blog1,
    },

    {
      destination: "NEPAL",
      title: "The Ultimate Guide to Trekking in the Himalayas",
      description: "Discover the best trekking routes in the Himalayas.",
      image: Blog2,
    },
    {
      destination: "NEPAL",
      title: "The Ultimate Guide to Trekking in the Himalayas",
      description: "Discover the best trekking routes in the Himalayas.",
      image: Blog3,
    },
  ];

  return (
    <div className="h-screen bg-white flex flex-col items-center py-20">
      <SectionHeading
        title="blog"
        subtitle="Stories That Inspire Your Next Journey"
        variant="white"
      />

      <div className="flex items-center justify-center gap-10 mt-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white flex flex-col items-center justify-center gap-2 w-[30%] h-[500px] rounded-xl overflow-hidden relative group"
          >
            <Image
              src={blog.image}
              alt="blog"
              width={300}
              height={500}
              className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
            />
            <span className="flex flex-col items-start justify-center px-4 py-6 gap-2 absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black">
              <p className="text-white text-sm font-medium">
                {blog.destination}
              </p>
              <p className="text-white text-lg font-semibold">
                {blog.description}
              </p>
              <button className="text-main border-b-2 border-transparent border-solid group-hover:border-b-main transition-all duration-300">
                Read More
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
