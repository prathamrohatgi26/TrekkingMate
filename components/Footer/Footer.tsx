"use client";
import React, { useEffect, useState } from "react";
import { SectionHeading } from "../ui/Headings";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUp, Mail, Phone } from "lucide-react";

const Footer = () => {
  const [btnClass, setbtnClass] = useState("");

  const handleVisibleButton = () => {
    const scrollDistance = 200;
    const position = window.scrollY;

    if (position > scrollDistance) {
      return setbtnClass("sm:flex");
    } else if (position < scrollDistance) {
      return setbtnClass("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  return (
    <>
      <div className="h-[45vh] w-screen sm:h-[75vh] flex flex-col items-center py-14 sm:px-0 px-10 bg-footer sm:bg-center bg-contain bg-white bg-bottom sm:bg-cover bg-no-repeat gap-8">
        <SectionHeading
          title=""
          subtitle="Explore Beyond Limits, Start Your Adventure!"
          variant="white"
        />
        <Button className="rounded-2xl scale-125 px-6">Plan Now</Button>
      </div>
      <div className="flex flex-col py-14 bg-[#121212] px-[12%]">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-10 pb-6 border-b border-white/[.24]">
          <div className="flex flex-col gap-1">
            <Image
              src="/images/White-logo.png"
              alt="logo"
              width={124}
              height={96}
            />
            <p className="text-white">Unlock Your Wanderlust!</p>
            <p className="flex items-center gap-2 text-white mt-4">
              <Mail size={18} /> info@trekkingmate.com
            </p>
            <p className="flex items-center gap-2 text-white mt-2">
              <Phone size={18} /> +977-9851040581
            </p>
            <p className="flex items-center gap-2 text-white mt-2">
              <Phone size={18} /> +977-9814299090
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="flex flex-col gap-4 ">
              <p className="text-white font-medium">Destinations</p>
              <p className="text-white/[.6]">Nepal</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white font-medium">Useful Links</p>
              <p className="text-white/[.6]">Privacy Policy</p>
              <p className="text-white/[.6]">Terms & Conditions</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white font-medium">Company</p>
              <p className="text-white/[.6]">About</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white font-medium">Address</p>
              <p className="text-white/[.6]">
                Katunje, Suryabinayak Municipality -5,
                <br /> Bhaktapur, Nepal
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-6">
          <p className="text-white/[.6] text-sm sm:text-base">
            Copyright Ⓒ 2024 Trekking Mate. All rights reserved.
          </p>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            variant="outline"
            className={`text-white bg-main rounded-[50%] h-[50px] w-[50px] px-6 py-3 border-none font-medium hidden fixed left-[95%] bottom-[2%] ${btnClass}`}
          >
            <ArrowUp />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Footer;
