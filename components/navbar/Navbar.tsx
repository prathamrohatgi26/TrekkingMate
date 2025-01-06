"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp, Contact, Menu, Phone, X } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [showMobileOfferings, setShowMobileOfferings] = useState(false);
  const router = useRouter();

  const dropdownItems = [
    {
      title: "Trekking",
      desc: "Starting from USD 2210/Person",
      link: `/tripType/Trekking`,
    },
    {
      title: "Tours",
      desc: "Starting from USD 2210/Person",
      link: "/tripType/Tours",
    },
    {
      title: "Expedition",
      desc: "Starting from USD 2210/Person",
      link: "/tripType/Expedition",
    },
  ];
  return (
    <header className="bg-[#121212] absolute top-0 left-0 right-0 z-50 w-full">
      <div className="flex justify-between items-center mx-[20px] sm:mx-[12%] h-[72px]">
        <a href="/">
          <Image
            src="/images/White-logo.png"
            alt="logo"
            width={76}
            height={48}
          />
        </a>
        <div className=" hidden sm:flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-white font-semibold text-lg"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Offerings
            {showDropdown ? <ChevronDown /> : <ChevronUp />}
          </Button>
          <Button variant="ghost" className="text-white font-semibold text-lg">
            Why us ?
          </Button>
          <Button variant="ghost" className="text-white font-semibold text-lg">
            About us
          </Button>
          <Button
            variant="outline"
            className="rounded-2xl text-white outline-white bg-transparent font-medium text-lg"
          >
            +977 9876543210
          </Button>
          <Button
            variant="default"
            className="rounded-2xl bg-main text-white font-medium text-lg hover:bg-mainhover "
          >
            Login/ Sign up
          </Button>
        </div>
        <div className="flex items-center text-white gap-3 sm:hidden">
          <Phone />
          <Contact />
          <button onClick={() => setShowMobileDropdown(!showMobileDropdown)}>
            {showMobileDropdown ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {showMobileDropdown && (
        <div className="w-full flex flex-col items-start">
          <button
            className="h-12 bg-[#121212] text-white text-sm font-medium p-2 w-full text-start px-5 flex items-center justify-between"
            onClick={() => setShowMobileOfferings(!showMobileOfferings)}
          >
            Offerings
            {showMobileDropdown ? <ChevronDown /> : <ChevronUp />}
          </button>
          {showMobileOfferings && (
            <>
              {dropdownItems.map((item, index) => (
                <button
                  className="h-16 bg-[#212121] text-white text-sm font-medium p-2 w-full text-start px-5"
                  key={index}
                  onClick={() => {
                    router.push(item.link);
                    setShowMobileDropdown(false);
                  }}
                >
                  <p className="text-white text-sm">{item.title}</p>
                  <p className="text-white/60 text-xs">{item.desc}</p>
                </button>
              ))}
            </>
          )}
          <button className="h-12 bg-[#121212] text-white text-sm font-medium p-2 w-full text-start px-5">
            Why Us?
          </button>
          <button className="h-12 bg-[#121212] text-white text-sm font-medium p-2 w-full text-start px-5">
            About Us
          </button>
        </div>
      )}

      {showDropdown && (
        <div className="w-full flex flex-row items-center justify-center gap-12 py-8 h-[168px]">
          <p className="text-white text-2xl">
            Curating Experiences,
            <br /> Not Just Trips!
          </p>
          {dropdownItems.map((item, index) => (
            <button
              key={index}
              className="p-4 flex flex-col gap-2 items-start justify-start group rounded-xl hover:bg-[#1E1E1E]"
              onClick={() => {
                router.push(item.link);
                setShowDropdown(false);
              }}
            >
              <p className="text-white font-bold text-xl group-hover:text-main">
                {item.title}
              </p>
              <p className="text-white/60">{item.desc}</p>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
