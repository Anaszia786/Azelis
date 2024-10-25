import { imagesPath } from "@/utils/constants";
import React from "react";
import SpotlightScience from "@/app/components/common/SpotlightScience";
import Ingredients from "@/app/components/common/Ingredients";
import { BackgroundGradient } from "@/app/components/common/textField";
import { Catagory } from "@/utils/subtitles";
import { SuppliersDetails } from "@/utils/listofsuppliers";

const SupplierDetails = () => {
  return (
    <div className="pt-20 px-6  sm:px-8 lg:px-14 h-full overflow-auto py-5 max-w-[1600px] m-auto ">
      <BackgroundGradient Recolor={"bg-[#265BA726]"} />
      <div>
        <SpotlightScience
          headtitle={"Supplier Name"}
          subtitle={Catagory.subtitle}
          back={imagesPath.back}
          prodtitle={"Ingredients"}
        />
      </div>
      <div className="grid  lg:grid-cols-3 sm:grid-cols-2  xl:gap-5 gap-4">
        {SuppliersDetails.map((obj, key) => {
          return (
            <Ingredients
              key={key}
              name={obj.fileName}
              filepic={imagesPath.file}
              download={imagesPath.download}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SupplierDetails;
