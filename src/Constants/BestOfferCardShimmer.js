import React from "react";

const BestOfferCardShimmer = () => {
  return (
    <div className="flex border border-solid border-gray-100 shadow-md rounded-2xl w-[450px] h-[300px] m-6">
      <div className="">
        <div className="border border-solid border-slate-100 w-[260px] h-[20px] rounded-md bg-slate-100 mt-7 mb-3 ml-4"></div>
        <div className="border border-solid border-slate-100 w-[160px] h-[20px] rounded-md bg-slate-100 mt-3 mb-3 ml-4"></div>
        <div className="border border-solid border-slate-100 w-[120px] h-[20px] rounded-md bg-slate-100 mt-5 mb-4 ml-4"></div>
        <div className="border border-solid border-slate-100 w-[160px] h-[20px] rounded-md bg-slate-100 mt-5 mb-5 ml-4"></div>
        <div className="border border-solid border-slate-100 w-[180px] h-[40px] rounded-md bg-slate-100 mt-6 mb-3 ml-4"></div>
      </div>
      <div>
        <div className="border border-solid border-slate-100 w-[160px] h-[160px] rounded-md bg-slate-100 mt-16 mb-3 mr-8"></div>
      </div>
    </div>
  );
};

export default BestOfferCardShimmer;
