import React from "react";
import TripHeading from "./TripHeading";
import TripContent from "./TripContent";

const TripData = ({ data }: any) => {
  return (
    <div className="bg-white">
      <TripHeading data={data?.data} />
      <TripContent data={data?.data} />
    </div>
  );
};

export default TripData;
