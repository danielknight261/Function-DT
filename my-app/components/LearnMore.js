import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const LearnMore = () => {
  return (
    <div className="flex justify-center items-center bg-[#19291C]">
      <div className="p-20 text-white text-center">
        <h1 className="text-xl py-2">Get your gifts in time for the holidays</h1>
        <h5 className="text-sm opacity-50 py-2">Free, extended returns until January 20th</h5>

        {/* Button */}
        <div className="flex justify-center">
          <a className="px-4 py-2 text-white border border-[#91939F] rounded-l-sm">
            Profile
          </a>
          <a className="px-2 py-2 text-white border border-[#91939F] rounded-r-sm">
            <AiOutlineRight size={20} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default LearnMore;
