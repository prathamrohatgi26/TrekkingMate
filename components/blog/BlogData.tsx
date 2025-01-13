import React from "react";
import BlogTitle from "./BlogTitle";
import BlogContent from "./BlogContent";

const BlogData = ({ data }: any) => {
  return (
    <div className="h-full w-full pt-20 px-10 bg-white">
      <BlogTitle
        title={data?.data?.title}
        publishedAt={data?.data?.publishedAt}
      />
      <BlogContent data={data?.data} />
    </div>
  );
};

export default BlogData;
