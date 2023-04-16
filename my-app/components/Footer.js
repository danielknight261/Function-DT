import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative">
        {/* Hero Image */}
        <img src="AFeature.png" alt="Hero Image" className="w-full h-auto object-cover max-h-96"/>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col justify-center items-center h-full text-center">
            {/* Container */}
            <div className="absolute flex p-8 p-8 py-4 mx-auto bg-[#282B3A] rounded-sm bottom-6 divide-x divide-[#91939F] ">
              <div className="pr-40 py-6	flex-grow: 1">
                {/* Text content */}
                <h5 className="text-[#91939F]">What's New</h5>
                <h1 className="text-white">
                  The Winter Collection
                </h1>
              </div>
              <div className="flex items-center text-white pl-4">
                {/* Icon */}
                <AiOutlineRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
