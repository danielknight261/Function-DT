import { AiOutlineRight, AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";

const Featured = () => {
  return (
    <div>
      {/* Products */}
      <div className="flex items-center justify-center mt-2">
        {/* media query which shows different amount of cards on different screen sizes */}
        <div className="grid gap-4 p-1 px-2 py-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {/* Hard Coded Featured */}
          {/* FEATURED PRODUCT  1 */}
          <div className="max-w-lg overflow-hidden rounded shadow-lg hover:shadow-gray-400 hover:cursor-pointer">
            <Image
              className="w-full"
              src="/doorway-1.png"
              alt="/"
              height="600"
              width="600"
            />
            <div className="flex justify-between">
              <div className="px-6 py-4">
                <div className="mb-2 text-xl text-[#282B3A]">
                  The Casual Edit
                </div>
                <p className="text-base text-[#808080]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <div>
                  {/* button */}
                  <div className="flex py-4">
                    <a className="px-4 py-2 text-[#282B3A] border border-[#91939F] rounded-l-sm ">
                      Shop All
                    </a>
                    <a className="px-2 py-2 text-[#282B3A] border border-[#91939F] rounded-r-sm ">
                      <AiOutlineRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FEATURED PRODUCT 2 */}
          <div className="max-w-lg overflow-hidden rounded shadow-lg hover:shadow-gray-400 hover:cursor-pointer">
            <Image
              className="w-full"
              src="/doorway-2.png"
              alt="/"
              height="450"
              width="600"
            />
            <div className="flex justify-between">
              <div className="px-6 py-4">
                <div className="mb-2 text-xl text-[#282B3A]">
                  The Denim Edit
                </div>
                <p className="text-base text-[#808080]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <div>
                  {/* button */}
                  <div className="flex py-4">
                    <a className="px-4 py-2 text-[#282B3A] border border-[#91939F] rounded-l-sm ">
                      Shop All
                    </a>
                    <a className="px-2 py-2 text-[#282B3A] border border-[#91939F] rounded-r-sm ">
                      <AiOutlineRight size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
