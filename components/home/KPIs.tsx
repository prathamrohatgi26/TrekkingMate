import React, { Fragment } from "react";

const KPIs = () => {
  const kpis = [
    {
      title: "Experience",
      description: "17 Years+",
    },
    {
      description: "2600+",
      title: "TripAdvisor Reviews",
    },
    {
      title: "Guranteed",
      description: "Best Price",
    },
    {
      title: "Comitted",
      description: "To Sustainability",
    },
  ];

  return (
    <div className="bg-black h-[140px] w-full flex items-center justify-center gap-16 my-auto overflow-hidden z-20">
      {kpis.map((kpi, index) => (
        <Fragment key={index}>
          <span
            className={`${
              index !== 0
                ? "border-l border-white/[.32] py-2 max-h-[60px] h-full"
                : ""
            }`}
          />
          <div className={`flex flex-col items-center justify-center`}>
            <p className="text-white text-2xl font-bold">{kpi.description}</p>
            <p className="text-white font-normal text-base">{kpi.title}</p>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default KPIs;
