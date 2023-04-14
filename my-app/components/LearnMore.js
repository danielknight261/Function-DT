import { AiOutlineRight } from "react-icons/ai";

const LearnMore = () => {
  return (
<div className="flex justify-center items-center bg-[#19291C]">
  <div className="p-20 text-white text-center">
    <h1 className="text-xl py-2">Get your gifts in time for the holidays</h1>
    <h5 className="text-sm opacity-50 py-2">Free, extended returns until January 20th</h5>

    <div className="flex justify-center rounded-sm ">
  <button className=" flex items-center border border-[#91939F] py-2 px-2 pr-2">
  <div className="">Learn More </div>
  <div className=" "><AiOutlineRight size={18} /></div>
    
  </button>
</div>

    </div>
  </div>




    
  );
};

export default LearnMore;
