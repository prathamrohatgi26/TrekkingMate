import NewsLetter from "@/components/newsletter/NewsLetter";
import TripData from "@/components/trip/TripData";
import TripHeading from "@/components/trip/TripHeading";
import React from "react";

const page = () => {
  return (
    <div className="bg-white">
      <TripData />
      <NewsLetter />
    </div>
  );
};

export default page;
