import BlogData from "@/components/blog/BlogData";
import Blogs from "@/components/home/Blogs";
import NewsLetter from "@/components/newsletter/NewsLetter";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const blogDetails = await fetch(
    `https://api.trekkingmate.com/api/blogs/${slug}?populate=image`
  );

  const blogDatafetch = await fetch(
    "https://api.trekkingmate.com/api/blogs?populate=image&sort=createdAt:desc"
  );

  const data: any = await blogDetails.json();
  const blogData = await blogDatafetch.json();

  return (
    <div>
      <BlogData data={data} />
      <Blogs blogData={blogData.data} />
      <NewsLetter />
    </div>
  );
};

export default page;
