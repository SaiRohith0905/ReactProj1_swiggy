import React from "react";
import { SEARCH_SUGGETION_IMG_URL } from "../Constants/Images";

const SuggetionCard = (props) => {
  const { eachsuggetion } = props;
  return (
    <div className="flex m-2 bg-white border border-solid border-white shadow-md rounded-md cursor-pointer hover:scale-[1.03] hover:transition-transform duration-700">
      <div className="w-[80px] h-[80px]">
        <img
          src={SEARCH_SUGGETION_IMG_URL + eachsuggetion?.cloudinaryId}
          className="rounded-lg p-1"
        />
      </div>
      <div className="ml-3 mt-1 mb-1 mr-3">
        <div className="text-xl">{eachsuggetion?.text}</div>
        <div className="text-xs font-light mt-2">{eachsuggetion?.type}</div>
      </div>
    </div>
  );
};

export default SuggetionCard;
