import React from "react";
import SpotlightScience from "@/app/components/common/SpotlightScience";
import { imagesPath } from "@/utils/constants";
import Supplier from "@/app/components/common/Supplier";
import { SuppliersName } from "@/utils/listofsuppliers";

const ListOfSupplier = () => {
  return (
    // Container of List of Suppliers page
    <div className="px-6 sm:px-8 lg:px-14  h-full overflow-auto py-5 max-w-[1600px] m-auto">
      <SpotlightScience
        back={imagesPath.back}
        prodtitle={"List of Suppliers"}
      />

      {/* Folder Cards */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 xl:gap-5 gap-4 ">
        {SuppliersName.map((Obj, key) => {
          return (
            <Supplier key={key} name={Obj.supName} folder={imagesPath.folder} />
          );
        })}
      </div>
    </div>
  );
};

export default ListOfSupplier;
