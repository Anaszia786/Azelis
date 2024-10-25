"use client";

import React, { Suspense, useEffect, useState } from "react";
import { appRoute, bgImagesPath, imagesPath } from "@/utils/constants";
import { exploreAllProducts } from "@/utils/exploreall";
import ExploreProducts from "@/app/components/common/ExploreProducts";
import SpotlightScience from "@/app/components/common/SpotlightScience";
import { BackgroundGradient } from "@/app/components/common/textField";
import { Catagory } from "@/utils/subtitles";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Experience,
  experiencesData,
  sensoryBarExpData,
} from "@/utils/experiences";

const SpotlightOnScience = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [experience, setExperience] = useState<Experience | null>();

  const onSectionClick = () => {
    router.push(appRoute.productDetails);
  };

  useEffect(() => {
    const experienceId = params.get("id");

    if (experienceId) {
      setExperience(
        [...experiencesData, ...sensoryBarExpData].find(
          (exp) => exp.id.toString() == experienceId
        ) || null
      );
    }
  }, [params]);

  return (
    <div className="pt-20 sm:px-8 lg:px-14 px-6 h-full overflow-auto py-5 max-w-[1600px] m-auto">
      {/* Conditional rendering of BackgroundGradient */}
      {experience && (
        <BackgroundGradient Recolor={experience.background_color} />
      )}
      <SpotlightScience
        headlogo={imagesPath.milk}
        headtitle={"Spotlight on Science"}
        subtitle={Catagory.subtitle}
        Recolor={"bg-[#F9B418]"}
        back={imagesPath.back}
        prodtitle={"Products"}
      />
      <div className="mb-5">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-5 gap-3">
          {exploreAllProducts.map((prod, key) => (
            <div key={key} onClick={onSectionClick} className="cursor-pointer ">
              <ExploreProducts
                prodImg={bgImagesPath.prodImg}
                prodName={prod.prodName}
                des={prod.prodDes}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SpotlightOnScienceWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SpotlightOnScience />
  </Suspense>
);

export default SpotlightOnScienceWithSuspense;
