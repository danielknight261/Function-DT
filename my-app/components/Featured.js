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
          <div className="max-w-sm overflow-hidden rounded shadow-lg hover:shadow-gray-400 hover:cursor-pointer">
            <Image
              className="w-full"
              src="/doorway-1.png"
              alt="/"
              height="600"
              width="600"
            />
            <div className="flex justify-between">
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">The Casual Edit</div>
                <p className="text-base text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <div>
                  <div className="flex border rounded-sm divide-x">
                    <button className="">Shop All</button>
                    <AiOutlineRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FEATURED PRODUCT 2 */}
          <div className="max-w-sm overflow-hidden rounded shadow-lg hover:shadow-gray-400 hover:cursor-pointer">
            <Image
              className="w-full"
              src="/doorway-2.png"
              alt="/"
              height="450"
              width="600"
            />
            <div className="flex justify-between">
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">The Denim Edit</div>
                <p className="text-base text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>

                <div>
                  <div className="flex border rounded-sm divide-x">
                    <button className="">Shop All</button>
                    <AiOutlineRight size={18} />
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
