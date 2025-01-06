import NewsLetter from "@/components/newsletter/NewsLetter";
import TripData from "@/components/trip/TripData";
import TripHeading from "@/components/trip/TripHeading";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  console.log(slug);
  const fetchItems = await fetch(
    `https://trekking-mate-services.onrender.com/api/tours/${slug}?populate=*`
  );

  const data: any = await fetchItems.json();

  // console.log(data);
  return (
    <div className="bg-white">
      <TripData data={data} />
      <NewsLetter />
    </div>
  );
};

export default page;
