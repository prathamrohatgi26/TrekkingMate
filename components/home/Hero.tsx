import React, { Fragment } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const Hero = ({ res }: any) => {
  const generateKpiBody = (kpis: any[]) => {
    return (
      <div className="flex gap-10 flex-col lg:flex-row">
        <div className="flex gap-10">
          <div
            className={`flex flex-col items-center justify-center pl-5 lg:pl-0`}
          >
            <p className="text-white text-2xl font-bold">{kpis[0].title}</p>
            <p className="text-white font-normal text-base">{kpis[0].body}</p>
          </div>
          <div
            className={`flex flex-col items-center justify-center border-0 lg:border-l border-white pl-8`}
          >
            <p className="text-white text-2xl font-bold">{kpis[1].title}</p>
            <p className="text-white font-normal text-base">{kpis[1].body}</p>
          </div>
        </div>
        <div className="flex gap-10 lg:border-l border-white">
          <div
            className={`flex flex-col items-center justify-center pl-5 lg:pl-10`}
          >
            <p className="text-white text-2xl font-bold">{kpis[2].title}</p>
            <p className="text-white font-normal text-base">{kpis[2].body}</p>
          </div>
          <div
            className={`flex flex-col items-center justify-center border-0 lg:border-l border-white pl-8`}
          >
            <p className="text-white text-2xl font-bold">{kpis[3].title}</p>
            <p className="text-white font-normal text-base">{kpis[3].body}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="overflow-hidden relative">
      <div
        className="bg-cover bg-center bg-no-repeat herozoom h-screen absolute top-0 left-0 right-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 6, 0.5)), url('${res.heroBackground.formats.large.url}')`,
        }}
      />
      <div className="flex flex-col gap-6 sm:gap-4 items-center justify-center h-screen z-20 relative p-2 sm:p-0">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          {res?.heroHeading}
        </h1>
        <p className="text-md md:text-2xl text-white text-center">
          {res?.heroSubHeading}
        </p>
        <div className="relative w-full sm:w-1/2 flex justify-center items-center mt-6">
          <input
            type="text"
            placeholder="Search trips ..."
            className="w-full p-2 rounded-[120px] h-[60px] sm:h-[68px] text-black placeholder:text-[#CBCBCB] bg-white text-lg pl-4"
          />
          <Button
            variant="default"
            className="hidden sm:flex absolute top-1/2 right-4 transform -translate-y-1/2 text-lg w-[120px] h-[48px] rounded-[120px] p-2"
          >
            Search
          </Button>

          <button className="rounded-full p-2 bg-main text-black absolute right-2 top-1/2 -translate-y-1/2 sm:hidden">
            <Search size={20} />
          </button>
        </div>
      </div>
      <div className="mt-[-200px] relative h-auto sm:h-[140px] md:h-[180px] w-full flex sm:flex-row items-center justify-center gap-2 sm:gap-16 my-auto z-2 py-6 sm:py-0">
        {generateKpiBody(res.metrics)}
      </div>
    </section>
  );
};

export default Hero;
