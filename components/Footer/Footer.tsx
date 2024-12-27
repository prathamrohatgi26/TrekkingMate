"use client";
import React from "react";
import { SectionHeading } from "../ui/Headings";
import Image from "next/image";
import { Button } from "../ui/button";
import { Mail, Phone } from "lucide-react";

const Footer = () => (
  <>
    <div className="h-[75vh] flex flex-col items-center py-14 bg-footer bg-center bg-cover bg-no-repeat gap-8">
      <SectionHeading
        title=""
        subtitle="Explore Beyond Limits, Start Your Adventure!"
        variant="white"
      />
      <Button className="rounded-2xl scale-125 px-6">Plan Now</Button>
    </div>
    <div className="h-[45vh] flex flex-col py-14 bg-[#121212] px-[12%]">
      <div className="flex items-start justify-between gap-10 pb-6 border-b border-white/[.24]">
        <div className="flex flex-col gap-1">
          <Image
            src="/images/White-logo.png"
            alt="logo"
            width={76}
            height={48}
          />
          <p className="text-white">Unlock Your Wanderlust!</p>
          <p className="flex items-center gap-2 text-white mt-4">
            <Mail size={18} /> contact@Trekkingmate.com
          </p>
          <p className="flex items-center gap-2 text-white mt-2">
            <Phone size={18} /> +977 9876543210
          </p>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-white font-medium">About Trekking Mate</p>
            <p className="text-white/[.6]">Why Us?</p>
            <p className="text-white/[.6]">About Us</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white font-medium">About Trekking Mate</p>
            <p className="text-white/[.6]">Why Us?</p>
            <p className="text-white/[.6]">About Us</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-6">
        <p className="text-white/[.6]">
          Copyright Ⓒ 2024 Trekking Mate. All rights reserved.
        </p>
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          variant="outline"
          className="text-white rounded-2xl px-6 py-3 font-medium border-[1.5px]"
        >
          Back to top
        </Button>
      </div>
    </div>
  </>
);

export default Footer;
