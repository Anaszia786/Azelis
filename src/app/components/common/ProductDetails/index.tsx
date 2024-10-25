"use client";
import { appRoute, imagesPath } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  description: string;
  features: string[];
  achievements: string;
  images: ProductImage[];
  backgroundDesign: string;
}

export interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();

  const onMoreDetailsClick = () => {
    router.push(appRoute.exploreAllProducts);
  };

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };
  const handleback = () => {
    router.back();
  };

  return (
    <div className="relative bg-[#F8FAFD] min-h-screen ">
      <div className="absolute top-0 right-0 w-96 h-96 opacity-30 hidden md:block">
        <img
          src={product.backgroundDesign}
          alt="Background Design"
          className="object-contain"
        />
      </div>

      {/* Back Button */}
      <div className="w-full flex justify-start px-6 sm:px-8 lg:px-14 items-center ">
        <img
          src={imagesPath.backArrow}
          onClick={handleback}
          alt="Back"
          className="cursor-pointer h-12 w-12 sm:h-16 sm:w-16"
        />
      </div>
      {/* products Image */}
      <div className="  flex flex-col lg:flex-row gap-14 px-6 sm:px-8 lg:px-14 ">
        <div className="w-full lg:w-1/3">
          <div className="relative w-full h-[300px] sm:h-[400px] bg-gray-200 rounded-lg">
            <img
              src={product.images[currentImage].src}
              alt={product.images[currentImage].alt}
              className="w-full h-full object-cover rounded-lg"
            />

            <img
              src={imagesPath.prevArrow}
              alt="Previous"
              className="object-contain absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={handlePrev}
            />
            <img
              src={imagesPath.nextArrow}
              alt="Next"
              className="object-contain absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={handleNext}
            />
          </div>

          <div className="mt-4 flex space-x-4 justify-center sm:justify-start">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`w-12 h-12 sm:w-16 sm:h-16 cursor-pointer border-2 ${
                  index === currentImage
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
                {/* product details */}
        <div className="w-full lg:w-1/2">
        {/* Product description */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#265BA7]">
            DESCRIPTION
          </h1>
          <p className="text-gray-600 mb-5">{product.description}</p>

          {/*Technical Features */}
          <div className="mb-4 sm:mb-6  mt-2">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#7E7E7E] mt-2">
              TECHNICAL FEATURES
            </h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start ">
                  <img
                    src={imagesPath.featureBullets}
                    alt="bullet points"
                    className="object-contain mr-2 "
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* How we did it */}
          <div className="mb-4 sm:mb-6  mt-2">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#7E7E7E]">
              HOW WE DID IT
            </h2>
            <p className="text-gray-600">{product.achievements}</p>
          </div>

          {/* More Details Button */}
          <button
            className="w-full sm:w-auto px-6 py-3 bg-[#265BA7] text-white font-bold rounded block sm:inline-block sm:mx-auto mt-2"
            onClick={onMoreDetailsClick}
          >
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
