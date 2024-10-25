"use client";
import { imagesPath } from "@/utils/constants";
import React from "react";
import TrackPlayer from "@/app/components/common/track";
import { tracks } from "@/utils/tacks";
import { useRouter } from "next/navigation";

interface SpotlightScienceProps {
  headlogo?: string;
  headtitle?: string;
  subtitle?: string;
  Recolor?: string;
  back: string;
  prodtitle: string;
  track?: boolean;
}

const SpotlightScience: React.FC<SpotlightScienceProps> = ({
  headlogo,
  headtitle,
  subtitle,
  back,
  prodtitle,
  track,
  Recolor,
}) => {
  const router = useRouter();
  const onBackBtnClick = () => {
    router.back();
  };

  return (
    <div className="cursor-pointer">
      <div className="flex flex-col justify-center items-center gap-2 relative">
        {/* Logo of page with Back Button on small screens */}
        <div className="flex items-center w-full sm:py-4 py-2">
          {/* Back button on small screens */}
          <div className="size-6 sm:hidden block" onClick={onBackBtnClick}>
            <img src={back} alt="back" />
          </div>
          {headlogo ? (
            <img
              className={`absolute left-1/2 transform -translate-x-1/2 p-[10px] rounded-xl ${Recolor}`}
              src={headlogo}
              alt="logo"
            />
          ) : null}
        </div>

        {/* Head title */}
        <h1 className="font-semibold text-2xl">{headtitle}</h1>

        {/* Subtitle */}
        <p className="sm:w-[80%] md:w-[600px] text-center text-[16px]">
          {subtitle}
        </p>
      </div>

      {/* Music track section */}
      {track ? (
        <TrackPlayer
          cover={imagesPath.music}
          prev={imagesPath.prev}
          play={imagesPath.play}
          next={imagesPath.next}
          track={tracks}
          pause={imagesPath.pause}
        />
      ) : null}

      {/* Products back option navigation */}
      <div className="flex pb-6 mt-10 items-center relative">
        <div className="flex gap-2">
          {/* Back button on larger screens */}
          <div className="size-6 sm:block hidden" onClick={onBackBtnClick}>
            <img src={back} alt="back" />
          </div>
          <a
            className="text-[#265BA7] sm:block hidden cursor-pointer"
            onClick={onBackBtnClick}
          >
            Back
          </a>
        </div>
        <p className="sm:text-2xl text-[18px] sm:text-black text-[#265BA7] font-semibold absolute left-1/2 transform -translate-x-1/2">
          {prodtitle}
        </p>
      </div>
    </div>
  );
};

export default SpotlightScience;
