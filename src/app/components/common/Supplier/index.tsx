"use client";
import { appRoute } from "@/utils/constants";
import { useRouter } from "next/navigation";
import React from "react";

interface Supplier {
  name?: string;
  folder?: string;
}

const Supplier: React.FC<Supplier> = ({ name, folder }) => {
  const router = useRouter();

  const onItemClick = () => {
    router.push(appRoute.supplierDetails);
  };
  return (
    <div
      className="h-[114px] flex items-center bg-[#A2BADE14] border-[#A2BADE] rounded-xl border-[1.5px] px-4 gap-3 transition-transform duration-300 hover:scale-[102%] cursor-pointer"
      onClick={onItemClick}
    >
      <div className="bg-[#265BA730] p-4 rounded-lg">
        <img src={folder} alt="" />
      </div>
      <p className="text-[#434345] text-[18px] font-bold ">{name}</p>
    </div>
  );
};

export default Supplier;
