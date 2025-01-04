"use client";
import React from "react";
const TourCards = ({
  data,
}: {
  data: { name: string; documentId: string; description: any };
}) => {
  const getTripIntroduction = (description: string) => {
    const lines = description.split("\n");
    let isIntroSection = false;
    let introText = "";

    for (const line of lines) {
      if (line.includes("#Trip Introduction")) {
        isIntroSection = true;
        continue;
      } else if (line.startsWith("#")) {
        isIntroSection = false;
      }

      if (isIntroSection && line.trim()) {
        introText = line.trim();
        break;
      }
    }

    return introText;
  };
  return (
    <div className="flex flex-col p-4 border-2 rounded-xl flex-shrink-0 h-full w-full gap-2">
      <h2 className="text-2xl font-semibold text-[#121212]">{data.name}</h2>
      <p className="text-gray-700 leading-relaxed">
        {data.description && data.description.length > 40
          ? getTripIntroduction(data.description)
          : "desc"}
      </p>
      <button
        className="self-start rouned-md px-3 py-1 bg-main text-white font-medium rounded-lg mt-auto"
        onClick={() =>
          (window.location.href = `/tripDetails/${data.documentId}`)
        }
      >
        view details
      </button>
    </div>
  );
};

export default TourCards;
