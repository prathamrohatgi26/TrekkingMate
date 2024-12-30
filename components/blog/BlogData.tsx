import React from "react";
import BlogTitle from "./BlogTitle";
import BlogContent from "./BlogContent";

const BlogData = () => {
  return (
    <div className="h-full w-full pt-20 px-10 bg-white">
      <BlogTitle />
      <BlogContent />
    </div>
  );
};

export default BlogData;
