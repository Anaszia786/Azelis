"use client";
import { appRoute, bgImagesPath } from "@/utils/constants";
import React from "react";
import ExploreProducts from "@/app/components/common/ExploreProducts";
import { exploreAllProducts } from "@/utils/exploreall";
import { useRouter } from "next/navigation";

const ExploreAllProducts = () => {
  const router = useRouter();

  const onBackClick = () => {
    router.push(appRoute.productDetails);
  };

  return (
    <div className=" xl:px-10 md:px-6 px-3 h-full overflow-auto py-5 max-w-[1600px] m-auto  shadow-inner">
      {/* PAGE TITle */}
      <div className="flex text-center pb-6 mt-10 relative">
        <div className="flex gap-2 cursor-pointer" onClick={onBackClick}>
          <div className="size-6">
            <img src={bgImagesPath.back} alt="back" />
          </div>
          <a className="text-[#265BA7] sm:block hidden ">Back</a>
        </div>
        <p className="sm:text-2xl text-[18px] sm:text-black text-[#265BA7] font-semibold absolute left-1/2 transform -translate-x-1/2">
          Explore All Products
        </p>
      </div>
      {/* Product Categories */}
      <div>
        {/* Skin Cards */}
        <div className="mb-5">
          {/* Products Categori Name */}
          <p className="text-[#7E7E7E] mb-2">Skin Care (9)</p>
          <div className="grid  lg:grid-cols-3 sm:grid-cols-2  xl:gap-5 gap-4 cursor-pointer">
            {exploreAllProducts.map((prod, key) => {
              return (
                <ExploreProducts
                  key={key}
                  prodImg={bgImagesPath.prodImg}
                  prodName={prod.prodName}
                  btn={prod.ProdSpec}
                  des={prod.prodDes}
                />
              );
            })}
          </div>
        </div>
        {/* Cosmetics cards */}
        <div className="">
          <p className="text-[#7E7E7E] mb-2">Cosmetics (9)</p>
          <div className="grid  lg:grid-cols-3 sm:grid-cols-2  xl:gap-5 gap-4 cursor-pointer">
            {exploreAllProducts.map((prod, key) => {
              return (
                <ExploreProducts
                  prodImg={bgImagesPath.prodImg}
                  prodName={prod.prodName}
                  btn={prod.ProdSpec}
                  des={prod.prodDes}
                  key={key}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreAllProducts;
