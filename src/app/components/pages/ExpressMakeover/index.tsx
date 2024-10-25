"use client";
import { imagesPath } from "@/utils/constants";
import { Catagory } from "@/utils/subtitles";
import React, { Suspense, useEffect, useState } from "react";
import SpotlightScience from "@/app/components/common/SpotlightScience";
import { exploreAllProducts } from "@/utils/exploreall";
import ExploreProducts from "@/app/components/common/ExploreProducts";
import { BackgroundGradient } from "@/app/components/common/textField";
import { useSearchParams } from "next/navigation";
import {
  Experience,
  experiencesData,
  sensoryBarExpData,
} from "@/utils/experiences";

const ExpressMakeover = () => {
  const params = useSearchParams();
  const [experience, setExperience] = useState<Experience | null>();
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
    <div className="pt-20 px-6 sm:px-8 lg:px-14  h-full overflow-auto py-5 max-w-[1600px] m-auto">
      {/* gradient background of Header */}
      {/* <BackgroundGradient Recolor={"bg-[#B4268826]"} /> */}
      <BackgroundGradient
        Recolor={experience?.background_color || "text-white"}
      />

      {/* Title of Categories  and Products header*/}
      <SpotlightScience
        headlogo={imagesPath.flash}
        headtitle={"Express Makeover"}
        subtitle={Catagory.subtitle}
        Recolor={"bg-[#B42688]"}
        back={imagesPath.back}
        prodtitle={"Products"}
        track={true}
      />
      {/*Cards  */}
      <div className="mb-5">
        {/* Products Categori Name */}
        <div className="grid  lg:grid-cols-3 sm:grid-cols-2  xl:gap-5 gap-4">
          {exploreAllProducts.map((prod, key) => {
            return (
              <ExploreProducts
                key={key}
                prodImg={imagesPath.prodImg}
                prodName={prod.prodName}
                des={prod.prodDes}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Wrap ExpressMakeover in a Suspense Boundary
const ExpressMakeoverWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ExpressMakeover />
  </Suspense>
);

export default ExpressMakeoverWithSuspense;
