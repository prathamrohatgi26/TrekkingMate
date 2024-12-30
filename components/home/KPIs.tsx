import React, { Fragment } from "react";

const KPIs = ({ res }: any) => {
  const kpis =
    res?.length > 0
      ? res
      : [
          {
            body: "Experience",
            title: "17 Years+",
          },
          {
            body: "2600+",
            title: "TripAdvisor Reviews",
          },
          {
            body: "Guranteed",
            title: "Best Price",
          },
          {
            title: "Comitted",
            body: "To Sustainability",
          },
        ];

  return (
    <div className="bg-[#121212] h-auto sm:h-[140px] w-full flex sm:flex-row flex-col items-center justify-center gap-2 sm:gap-16 my-auto overflow-hidden z-20 py-6 sm:py-0">
      {kpis.map((kpi: any, index: any) => (
        <Fragment key={index}>
          <span
            className={`${
              index !== 0
                ? "sm:border-l border-b w-1/2 sm:w-0 border-white/[.32] py-2 max-h-[60px] sm:h-full"
                : ""
            }`}
          />
          <div className={`flex flex-col items-center justify-center`}>
            <p className="text-white text-2xl font-bold">{kpi.title}</p>
            <p className="text-white font-normal text-base">{kpi.body}</p>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default KPIs;
