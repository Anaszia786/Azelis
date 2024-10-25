"use client";
import { cards } from "@/utils/cardsData";
import React from "react";
import { useRouter } from "next/navigation";
import { appRoute } from "@/utils/constants";

const CardSection: React.FC = () => {
  const router = useRouter();

  const handleCardClick = (title: string) => {
    if (title === "Concept Formulations") {
      router.push(appRoute.experience);
    } else if (title === "Sensory Bar") {
      router.push(appRoute.sensoryBarExp);
    } else if (title === "Novel Ingredients") {
      router.push(appRoute.listOfSuppliers);
    }
  };

  return (
    <div className="flex flex-col m-auto max-w-[1600px]">
      <h2 className="sm:text-3xl text-xl font-semibold text-gray-800 py-[10px] text-center pt-10 ">
        Choose Your Zone
      </h2>

      {/* Grid with responsive gap */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 sm:px-8 lg:px-14 lg:gap-5 sm:gap-3 gap-2 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="shadow-lg cursor-pointer rounded-xl hover:shadow-xl transition-shadow duration-400 border border-blue-300 relative bg-[#F5F8FB] w-full  mx-auto lg:h-[227px] sm:h-[118px] md:h-[130px] flex flex-col lg:flex-row p-4"
            onClick={() => handleCardClick(card.title)}
          >
            {/* On md and smaller, place icon beside text */}
            <div className="flex flex-row    items-center lg:flex-col lg:items-start gap-3 ">
              {/* Left icon */}
              <div className="min-h-[68px] w-[58px] h-[58px] min-w-[68px] bg-[#265BA730] rounded-xl flex items-center justify-center p-3 ">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="h-[58px] w-[58px] "
                />
              </div>

              {/* Title and description */}
              <div className="flex flex-col justify-center">
                <h3 className="sm:text-xl font-bold text-gray-900 font-[600px] font-noto-sans overflow-hidden line-clamp-1 text-ellipsis">
                  {card.title}
                </h3>
                <p className="text-base text-gray-500 mt-1 line-clamp-2 font-[400px] font-noto-sans">
                  {card.description}
                </p>
              </div>
            </div>

            {/* Right arrow, visible only on large screens */}
            <div className="hidden lg:flex items-center justify-center h-[50px] min-w-[50px] w-[50px]  bg-[#265BA7] rounded-full ">
              <img
                src={card.arrowIcon}
                alt="arrow icon"
                className="hidden lg:block h-[30px] w-[30px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
