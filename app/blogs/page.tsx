import Categories from "@/components/blog/Categories";
import Blogs from "@/components/home/Blogs";
import NewsLetter from "@/components/newsletter/NewsLetter";
import React from "react";

const page = () => {
  return (
    <div className="py-20 bg-white">
      <Blogs />
      <Categories />
      <NewsLetter />
    </div>
  );
};

export default page;
