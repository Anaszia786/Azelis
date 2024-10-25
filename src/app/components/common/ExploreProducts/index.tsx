"use client";
import React from "react";
import { TextField, TextSpec } from "@/app/components/common/textField";
import { appRoute } from "@/utils/constants";
import { useRouter } from "next/navigation";
interface ExploreProducts {
  prodImg?: string;
  prodName?: string;
  btn?: string;
  des?: string;
}

const ExploreProducts: React.FC<ExploreProducts> = ({
  prodImg,
  prodName,
  btn,
  des,
}) => {
  const router = useRouter();

  const onItemClick = () => {
    router.push(appRoute.productDetails);
  };

  return (
    // card
    <div
      className="py-[6px] flex bg-[#F8FAFD] border-[1.5px] border-[#A2BADE] rounded-lg xl:gap-3 gap-2 px-2 h-[105px] transition-transform duration-300 hover:scale-[102%]"
      onClick={onItemClick}
    >
      <div
        className={`flex m-auto ${
          btn
            ? "md:min-w-[85px] max-w-[85px] min-w-[85px] h-[90px]"
            : " max-w-[80px]  min-w-[80px] h-[80px]"
        }`}
      >
        <img src={prodImg} className="" alt="" />
      </div>
      {/* Prod Details */}
      <div
        className={`flex flex-col flex-grow ${
          btn ? "sm:justify-between justify-evenly gap-1" : "justify-evenly"
        }`}
      >
        <div className="flex flex-col gap-0 ">
          {<TextField text={prodName} restyle=" break-all " />}
          {btn ? (
            <TextSpec
              spec={btn}
              Respec={
                btn !== "Mild & Mighty"
                  ? btn == "Spotlight on Science"
                    ? "bg-[#F9B418] "
                    : "bg-[#2AA7DF]"
                  : "bg-[#26BAAC] "
              }
            />
          ) : (
            ""
          )}
        </div>
        <p className="md:text-sm text-[12px]  text-[#757575] max-h-[48px] text-ellipsis overflow-hidden line-clamp-2 ">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ExploreProducts;
