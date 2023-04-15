import { AiOutlineRight, AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";

const BestSellers = () => {
  return (
    <div>
      {/* Head section */}
      <div className="flex justify-between mx-4 py-4  ">
        <h1 className="pl-20">Best Sellers</h1>
        <div className="flex border rounded-sm divide-x">
          <button className="pr-20">Shop All</button>
          <AiOutlineRight size={18} />
        </div>
      </div>

      

      

      {/* Products */}
      <div className="flex items-center justify-center mt-2">
        {/* media query which shows different amount of cards on different screen sizes */}
        <div className="grid gap-4 p-1 px-2 py-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Hard Coded Best Sellers */}
 {/* PRODUCT 1 */}
          <div className="max-w-sm overflow-hidden rounded shadow-lg hover:shadow-gray-400 hover:cursor-pointer">
            <Image
              className="w-full"
              src="/product-image-1.png"
              alt="/"
              height="450"
              width="600"
            />
            <div className="flex justify-between">
              <div className="px-6 py-4">
                <div className="mb-2 text-[#282B3A]">Fredo Jacket</div>
                <p className="text-base text-[#6B6D7A]">£230</p>
              </div>
              <div className="px-6 py-4 text-[#282B3A]">
                <AiOutlineHeart size={20} />
              </div>
            </div>
          </div>
{/* PRODUCT 2 */}
          <div className="max-w-sm overflow-hidden rounded shadow-lg hover:shadow-gray-400 hover:cursor-pointer">
            <Image
              className="w-full"
              src="/product-image-2.png"
              alt="/"
              height="450"
              width="600"
            />
            <div className="flex justify-between">
              <div className="px-6 py-4">
                <div className="mb-2 text-[#282B3A]">Powell Jacket</div>
                <p className="text-base text-[#6B6D7A]">£350</p>
              </div>
              <div className="px-6 py-4 text-[#282B3A]">
                <AiOutlineHeart size={20} />
              </div>
            </div>
          </div>
{/* PRODUCT 3 */}
          <div className="max-w-sm overflow-hidden rounded shadow-lg hover:shadow-gray-400 hover:cursor-pointer">
            <Image
              className="w-full"
              src="/product-image-3.png"
              alt="/"
              height="450"
              width="600"
            />
            <div className="flex justify-between">
              <div className="px-6 py-4">
                <div className="mb-2 text-[#282B3A]">Lazar Jacket in Denim</div>
                <p className="text-base text-[#6B6D7A]">£395</p>
              </div>
              <div className="px-6 py-4 text-[#282B3A]">
                <AiOutlineHeart size={20} />
              </div>
            </div>
          </div>
{/* PRODUCT 4 */}
<div className="max-w-sm overflow-hidden rounded shadow-lg hover:shadow-gray-400 hover:cursor-pointer">
            <Image
              className="w-full"
              src="/product-image-4.png"
              alt="/"
              height="450"
              width="600"
            />
            <div className="flex justify-between">
              <div className="px-6 py-4">
                <div className="mb-2  text-[#282B3A]">Lazar Jacket in Black</div>
                <p className="text-base text-[#6B6D7A]">£395</p>
              </div>
              <div className="px-6 py-4 text-[#282B3A]">
                <AiOutlineHeart size={20} />
              </div>
            </div>
          </div>

          
        </div>
      </div>

      
    </div>
  );
};

export default BestSellers;
