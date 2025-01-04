import NewsLetter from "@/components/newsletter/NewsLetter";
import TourCards from "@/components/tourCard/TourCards";
import React from "react";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const fetchItems = await fetch(
    `https://trekking-mate-services.onrender.com/api/tours?populate=*&filters[type][name][$eqi]=${slug}`
  );

  const data: any = await fetchItems.json();
  const tours = data.data;
  return (
    <div className="bg-white py-24">
      <h1 className=" text-center my-2 text-5xl text-[#121212] font-semibold">
        {slug}
      </h1>
      <div className="w-full py-10 grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center p-2">
        {tours && tours.length > 0 ? (
          tours.map((item: any, index: number) => (
            <TourCards data={item} key={index} />
          ))
        ) : (
          <p className="text-black">No tours found</p>
        )}
      </div>
      <NewsLetter />
    </div>
  );
};

export default Page;
