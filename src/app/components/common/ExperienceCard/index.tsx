"use client";
import { appRoute, imagesPath } from "@/utils/constants";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Card from "./card";
import { Experience } from "@/utils/experiences";

interface ExperienceCardProps {
  experiences: Experience[];
}
const ExperienceCard: React.FC<ExperienceCardProps> = ({ experiences }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleBackClick = () => {
    router.push(appRoute.default);
  };

  const handleCardClick = () => {
    if (pathname === appRoute.sensoryBarExp) {
      router.push(appRoute.expressMakeover);
    } else {
      router.push(appRoute.spotLightOnScience);
    }
  };

  return (
    <div className="container px-6 sm:px-8 lg:px-14 py-2 max-w-[1600px] m-auto">
      {/* Choose your Experienve*/}
      <div className="flex items-center h-16">
        <img
          src={imagesPath.backArrow}
          alt="back arrow"
          className="h-16 w-16 md:block hidden cursor-pointer"
          onClick={handleBackClick}
        />
        <img
          src={imagesPath.back}
          alt="back arrow"
          className="min-w-[26px] overflow-hidden md:hidden block cursor-pointer "
          onClick={handleBackClick}
        />
        <h1 className="sm:text-2xl text-lg text-center t min-w-[282px] font-semibold absolute left-1/2 transform -translate-x-1/2">
          Choose Your Experience
        </h1>
      </div>
      {/* THree cards on first row due to flow(sensor or conept  bar flow) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  cursor-pointer w-[100%] lg:gap-6 sm:gap-4 gap-2 ">
        {experiences.slice(0, 3).map((experience, key) => (
          <Card key={key} experience={experience} />
        ))}
      </div>

      {/* Render the last two cards only if there are more than three experiences */}
      {experiences.length > 3 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 ">
          {experiences.slice(3).map((experience, key) => (
            <Link
              
              href={`${
                pathname === appRoute.sensoryBarExp
                  ? appRoute.expressMakeover
                  : appRoute.spotLightOnScience
              }?id=${encodeURIComponent(experience.id)}`}
              key={experience.id}
              className="relative rounded-lg overflow-hidden shadow-lg transform hover:scale-[101%] transition duration-300"
              // call function and pass probs to change color of next page dynamicalyy
              onClick={handleCardClick}
              style={{
                backgroundImage: `url(${experience.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "280px",
              }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="relative z-10 p-6 flex flex-col h-full justify-end">
                <div className="text-left">
                  <div
                    className={` h-10 w-10 rounded-lg  ${experience.background_color} flex items-center justify-center mb-2`}
                  >
                    <img
                      key={key}
                      src={experience.icon}
                      alt={`${experience.title} Icon`}
                      className="h-5 w-5"
                    />
                  </div>
                  <h2
                    className={` ${experience.text_color} text-xl font-bold mb-2`}
                  >
                    {experience.title}
                  </h2>
                  <p className="text-white text-sm">{experience.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
