"use client";
import { usePathname, useRouter } from "next/navigation";
import { appRoute, imagesPath } from "@/utils/constants";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth); // Set initial width
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize); // Update width on resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onLogoClick = () => {
    router.push(appRoute.default);
  };

  const handleExploreAllClick = () => {
    router.push(appRoute.exploreAllProducts);
  };

  // Conditionally render MainHeader or Header based on route
  const isExperienceListRoute =
    pathname === appRoute.default ||
    pathname === appRoute.experience ||
    pathname === appRoute.sensoryBarExp ||
    pathname === appRoute.listOfSuppliers;

  const getNavLinkClass = (route: string) => {
    return pathname === route
      ? "text-[#265BA7] font-bold"
      : "text-black hover:text-black-800 font-bold";
  };

  if (!isExperienceListRoute) {
    return (
      <header className="w-full z-10">
        {/* h-50 */}
        <div className="w-full bg-transparent">
          <div
            className={`z-20 px-6 inset-x-0 bottom-0 ${
              pathname === "/product-details" ? "shadow-md" : "shadow-none"
            } sm:px-8 lg:px-14 flex items-center justify-between py-4`}
          >
            <div
              className="text-white text-xl font-bold flex items-center cursor-pointer"
              onClick={onLogoClick}
            >
              <img
                src={imagesPath.azelisBlueLogo}
                alt="Azelis Logo"
                className="h-12"
              />
            </div>

            {/* Navbar - Hidden on small screens, visible on medium and larger screens */}
            <nav className="space-x-9 text-sm text-center cursor-pointer hidden sm:flex font-noto-sans">
              <a className={getNavLinkClass("/about")}>About Azelis</a>
              <a
                className={getNavLinkClass(appRoute.exploreAllProducts)}
                onClick={handleExploreAllClick}
              >
                Explore All
              </a>
              <a className={getNavLinkClass("/contact")}>Contact Us</a>
            </nav>

            <div className="text-blue-500 text-bold font-weight-200 text-right">
              <span className="font-bold">
                Innovation
                <br />
                <span style={{ color: "#2aa7df" }}>through</span>
                <br />
                formulation
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <div className="relative">
      <div className="sm:mb- m-auto max-w-[1600px] sm:h-[380px] h-[250px]">
        {/* Curved Background */}
        <div
          style={{
            backgroundColor: "#345BA2",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            clipPath:
              windowWidth > 768
                ? "ellipse(100% 95% at 27% 0%)"
                : "ellipse(100% 100% at 25% 0%)",
            zIndex: 0,
          }}
        ></div>

        <div className="relative z-20 w-full px-6 sm:px-8 lg:px-14 py-6 flex justify-between items-center">
          <div
            className="text-white text-xl font-bold flex justify-center cursor-pointer"
            onClick={onLogoClick}
          >
            <img
              src={imagesPath.azelisLogo}
              alt="Azelis Logo"
              className="w-[78px] h-[52px]"
            />
          </div>

          <nav className="hidden sm:flex space-x-9 text-sm text-center font-noto-sans">
            <a className="text-white font-[500] cursor-pointer">About Azelis</a>
            <a
              className="text-white font-[500] cursor-pointer"
              onClick={handleExploreAllClick}
            >
              Explore All
            </a>
            <a className="text-white font-[500] cursor-pointer">Contact Us</a>
          </nav>

          <div className="text-white text-right font-bold font-[669] font-noto-sans">
            <span>
              Innovation
              <br /> through
              <br /> formulation
            </span>
          </div>
        </div>

        <div className="relative inset-0 flex flex-col items-center z-20">
          <div className="flex flex-col">
            <h1 className="sm:text-4xl text-xl text-white font-[400]">
              Azelis brings
            </h1>
            <h1
              className="sm:text-4xl text-xl text-left w-full sm:pl-[105px] pl-[60px] font-[600] flex items-center"
              style={{ color: "#2aa7df" }}
            >
              your ideas
            </h1>
            <h1 className="sm:text-4xl text-xl text-center text-white font-[400]">
              to life
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
