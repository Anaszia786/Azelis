"use client";
import { appRoute } from "@/utils/constants";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Experience } from "@/utils/experiences";

interface ExperienceCardProps {
  experience: Experience;
}
const Card: React.FC<ExperienceCardProps> = ({ experience }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleCardClick = () => {
    if (pathname === appRoute.sensoryBarExp) {
      router.push(appRoute.expressMakeover);
    } else {
      router.push(appRoute.spotLightOnScience);
    }
  };

  return (
    <Link
      href={`${
        pathname === appRoute.sensoryBarExp
          ? appRoute.expressMakeover
          : appRoute.spotLightOnScience
      }?id=${encodeURIComponent(experience.id)}`}
      key={experience.id}
      className="rounded-lg overflow-hidden shadow-lg transform hover:scale-[101%] transition duration-300 cursor-pointer"
      onClick={handleCardClick}
      style={{
        backgroundImage: `url(${experience.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "266px",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 p-6 flex flex-col h-full justify-end">
        <div className="text-left">
          {/* Image backgroud dynamically */}
          <div
            className={`h-10 w-10 rounded-lg ${experience.background_color} flex items-center justify-center mb-2`}
          >
            <img
              src={experience.icon}
              alt={`${experience.title} Icon`}
              className="h-5 w-5 "
            />
          </div>
          <h2 className={` ${experience.text_color} text-xl font-bold mb-2`}>
            {experience.title}
          </h2>
          <p className="text-white text-sm">{experience.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
