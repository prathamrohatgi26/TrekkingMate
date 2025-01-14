import React from "react";
import Blog1 from "/public/images/blog1.png";
import Blog2 from "/public/images/blog2.png";
import Blog3 from "/public/images/blog3.png";
import Image from "next/image";
import { SectionHeading } from "../ui/Headings";
const Blogs = ({ blogData }: any) => {
  return (
    <div className="sm:min-h-screen bg-white flex flex-col items-center py-20">
      <SectionHeading
        title="blog"
        subtitle="Stories That Inspire Your Next Journey"
        variant="white"
      />

      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-10 flex-wrap">
        {blogData?.map((blog: any) => (
          <div
            key={blog.id}
            className={`bg-white flex flex-col items-center justify-center gap-2 ${
              blogData.length === 1
                ? "w-[90%]"
                : blogData.length === 2
                ? "w-[45%]"
                : "w-[30%]"
            } h-[500px] rounded-xl overflow-hidden relative group`}
          >
            <Image
              src={blog.image.formats.small.url}
              alt="blog"
              width={300}
              height={500}
              className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
            />
            <span className="flex flex-col items-start justify-center px-4 py-6 gap-2 absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-black">
              <p className="text-white text-sm font-medium">NEPAL</p>
              <p className="text-white text-lg font-semibold">{blog.title}</p>
              <a
                href={`/blogs/${blog.documentId}`}
                className="text-main border-b-2 border-transparent border-solid group-hover:border-b-main transition-all duration-300"
              >
                Read More
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
