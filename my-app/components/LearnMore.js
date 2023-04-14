import { AiOutlineRight } from "react-icons/ai";

const LearnMore = () => {
  return (
    // <div className="m-auto p-20 flex items-center bg-green-950">
    //   <div className=" text-white ">
    //     <h1>Get your gifts in time for the holidays</h1>
    //     <h5>Free, extended returns until January 20th</h5>
    //     <div className="flex border rounded-sm divide-x">
    //       <button className="">Shop All</button>
    //       <AiOutlineRight size={18} />
    //     </div>
    //   </div>
    // </div>
<div className="m-auto bg-green-950">
    <div className="flex justify-center items-center ">
  <div className="p-20 text-white">
    <h1>Get your gifts in time for the holidays</h1>
    <h5>Free, extended returns until January 20th</h5>
    <div className="flex border rounded-sm divide-x">
      <button className="">Shop All</button>
      <AiOutlineRight size={18} />
    </div>
  </div>
</div>
</div>


    
  );
};

export default LearnMore;
