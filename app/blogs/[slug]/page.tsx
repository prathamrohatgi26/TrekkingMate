import BlogData from "@/components/blog/BlogData";
import Blogs from "@/components/home/Blogs";
import NewsLetter from "@/components/newsletter/NewsLetter";
import React from "react";

const page = () => {
  return (
    <div>
      <BlogData />
      <Blogs />
      <NewsLetter />
    </div>
  );
};

export default page;
