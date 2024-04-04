import React from "react";
import Heading from "./Heading";
import { ONMINDDISH_IMAGES_URL } from "../Constants/Images";
import WhatsOnYourMindShimmer from "../Constants/WhatsOnYourMindShimmer";
const WhatsOnYourMind = (props) => {
  const { mindtitle } = props?.requiredtitle;
  const { imageGridCards } = props?.onMind?.card?.card;
  let mindCards = imageGridCards?.info;
  const mindcardsdummyarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <Heading title={"What's On Your Mind?"} />
      {mindCards?.length > 0 ? (
        <div className="flex overflow-auto ">
          {mindCards?.map((eachCard) => {
            return (
              <img
                key={eachCard?.imageId}
                className="w-[450px] h-[300px] m-6 hover:scale-[1.07] hover:transition-transform duration-1000"
                src={ONMINDDISH_IMAGES_URL + eachCard?.imageId}
                alt="mindcards_image"
              />
            );
          })}
        </div>
      ) : (
        <div className="flex overflow-auto">
          {mindcardsdummyarray.map((eachshim) => {
            return <WhatsOnYourMindShimmer key={eachshim} />;
          })}
        </div>
      )}
    </div>
  );
};

export default WhatsOnYourMind;
