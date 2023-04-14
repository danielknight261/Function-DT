import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

const Hero = () => {
  return (
    <>
      <div className="relative w-full justify-self-center h-80 md:min-w-fit">
        {/* TODO fix the white space on full screen on the left */}
        <Image
          src="/AFeature.png"
          layout="fill"
          objectFit=""
          objectPosition=""
          alt="main-image"
        />

        {/* container */}
        <div className=" flex absolute p-4 px-4 py-2 mx-auto text-center bg-gray-900 rounded-sm bottom-4 divide-x">
          <div className="pr-4">
            <h5 className="flex text-xl lg:text-sm text-white">What's New</h5>
            <h1 className="flex text-xl lg:text-3xl text-white">
              The Winter Collection
            </h1>
          </div>
          <div className="text-white pl-4">
            <AiOutlineRight size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
