    import { imagesPath } from '@/utils/constants';
    import React from 'react';

    const MainHeader = () => {
    return (
        <>
        <header className="relative mb-12"> 
            <div className="relative w-full h-96">
            <img
                src={imagesPath.bgMain}
                alt="Curved Vector Background"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-6">
                <div className="text-white text-xl font-bold flex items-center">
                <img src={imagesPath.azelisLogo} alt="Azelis Logo" className="h-12 w-auto mr-2" />
                </div>

                <nav className="flex space-x-9 text-sm text-center">
                <a href="#" className="text-white hover:text-blue-300">About Azelis</a>
                <a href="#" className="text-white hover:text-blue-300">Explore All</a>
                <a href="#" className="text-white hover:text-blue-300">Contact Us</a>
                </nav>

                <div className="text-white text-bold text-center">
                <span>Innovation<br /> through<br /> formulation</span>
                </div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-center text-white">Azelis brings</h1>
                <h1 className="text-4xl font-bold text-left w-full pl-44" style={{ color: '#2aa7df' }}>your ideas</h1>
                <h1 className="text-4xl font-bold text-center text-white">to life</h1>
                </div>
            </div>
            </div>
        </header>
        </>
    );
    };

    export default MainHeader;
