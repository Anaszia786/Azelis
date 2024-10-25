"use client";
import { appRoute, imagesPath } from "@/utils/constants";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Footer: React.FC = () => {
  const router = useRouter();
  const [color, setColor] = useState<boolean>(false);
  const [contactcolor, setcontactColor] = useState<boolean>(false);
  const [aboutcolor, setaboutColor] = useState<boolean>(false);

  const handleExploreAllClick = () => {
    setColor(!color);
    setcontactColor(false);
    setaboutColor(false);
    router.push(appRoute.exploreAllProducts);
  };

  const handleAboutClick = () => {
    setColor(false);
    setcontactColor(false);
    setaboutColor(!aboutcolor);
  };

  const handleContactUsClick = () => {
    setcontactColor(!contactcolor);
    setColor(false);
    setaboutColor(false);
  };

  return (
    <footer className="pt-[150px]">
      <div className="fixed bottom-0  left-0 right-0 flex justify-around items-center bg-gray-100 p-4 shadow-lg sm:hidden rounded-t-lg border-t-2 border-blue-500 h-[93px]">
        {/* About Azelis */}
        <div
          onClick={handleAboutClick}
          className={`flex flex-col items-center ${
            aboutcolor ? "bg-[#265BA7]" : ""
          } cursor-pointer w-full h-[65px] rounded-lg `}
        >
          <div className="flex items-center justify-center w-full py-2">
            <div
              className={`flex justify-center ${
                aboutcolor ? "bg-white" : ""
              } rounded-full h-6 w-6 `}
            >
              <img
                src={imagesPath.azelisBlueLogo}
                alt="About Azelis"
                className="h-6 w-6 mb-1 p-1"
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <span
              className={`text-xs font-bold ${aboutcolor ? "text-white" : ""}`}
            >
              About Azelis
            </span>
          </div>
        </div>

        <div className="w-[1px] h-14 bg-sky-400"></div>
        {/* Explore All */}
        <div
          onClick={handleExploreAllClick}
          className={`flex flex-col items-center ${
            color ? "bg-[#265BA7]" : ""
          } cursor-pointer w-full h-[65px] rounded-lg `}
        >
          <div className="flex items-center justify-center w-full py-2">
            {color ? (
              <img
                src={imagesPath.vectorExploreAllW}
                alt="Explore All"
                className="h-6 w-6 mb-1"
              />
            ) : (
              <img
                src={imagesPath.vectorExploreAll}
                alt="Explore All"
                className="h-6 w-6 mb-1"
              />
            )}
          </div>
          <div className="w-full flex justify-center">
            <span className={`text-xs font-bold ${color ? "text-white" : ""}`}>
              Explore All
            </span>
          </div>
        </div>

        <div className="w-[1px] h-14 bg-sky-400"></div>
        {/* Contact Us */}
        <div
          onClick={handleContactUsClick}
          className={`flex flex-col items-center ${
            contactcolor ? "bg-[#265BA7]" : ""
          } cursor-pointer w-full h-[65px] rounded-lg `}
        >
          <div className="flex items-center justify-center w-full py-2">
            {contactcolor ? (
              <img
                src={imagesPath.contactWhite}
                alt="Contact Us"
                className="h-6 w-6 mb-1"
              />
            ) : (
              <img
                src={imagesPath.contact}
                alt="Explore All"
                className="h-6 w-6 mb-1"
              />
            )}
          </div>
          <div className="w-full flex justify-center">
            <span
              className={`text-xs font-bold ${
                contactcolor ? "text-white" : ""
              }`}
            >
              Contact Us
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
