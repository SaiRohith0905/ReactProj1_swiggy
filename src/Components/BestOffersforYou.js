import React from "react";
import Heading from "./Heading";
import { COROUSAL_URL } from "../Constants/Images";
import BestOfferCardShimmer from "../Constants/BestOfferCardShimmer";
import "../App.css";

const BestOffersforYou = (props) => {
  const { imageGridCards } = props?.offerDetails?.card?.card;
  const offerCards = imageGridCards?.info;
  const shimmerArray = [1, 2, 3, 4];
  return (
    <div>
      <Heading title={"Best Offers for You"} />
      <div className="flex overflow-auto scroll-body ">
        {offerCards.length > 0 ? (
          offerCards.map((eachCard) => {
            return (
              <img
                key={eachCard?.imageId}
                className="w-[450px] h-[300px] m-8 hover:scale-[1.08] hover:transition-transform duration-1000"
                src={COROUSAL_URL + eachCard?.imageId}
                alt="bestoffers_image"
              />
            );
          })
        ) : (
          <div className="flex overflow-auto">
            {shimmerArray.map((eachshim) => {
              return <BestOfferCardShimmer key={eachshim} />;
            })}
          </div>
        )}
        {}
      </div>
    </div>
  );
};

export default BestOffersforYou;
