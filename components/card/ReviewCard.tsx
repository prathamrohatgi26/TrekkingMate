import { Star } from "lucide-react";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="flex flex-col gap-3 p-3 items-start justify-start border-2 rounded-md">
      <span className="flex items-center gap-2">
        <span className="bg-[red] size-10 rounded-full flex-shrink-0" />
        <span className="flex flex-col gap-1">
          <p className="text-base font-medium capitalize">random name</p>
          <span className="flex items-center gap-1">
            <Star className="size-4 text-[#FFB800]" />
            <Star className="size-4 text-[#FFB800]" />
            <Star className="size-4 text-[#FFB800]" />
            <Star className="size-4 text-[#FFB800]" />
            <Star className="size-4 text-[#FFB800]" />
          </span>
        </span>
      </span>
      <span>
        <p>Title for review</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos.
        </p>
      </span>
    </div>
  );
};

export default ReviewCard;
