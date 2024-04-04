import React from "react";
import { OFFER_ICON_URL } from "../Constants/Images";

const OfferCard = (props) => {
  const offerCardDetails = props?.offerCardDetails;
  // console.log(offerCardDetails);
  return (
    <div className="border border-solid rounded-md m-3 p-[12px] w-[480px]">
      <div>
        <img
          src={OFFER_ICON_URL + offerCardDetails?.info?.offerLogo}
          className="inline-block"
          alt="offerlogo"
        />
        <span>{offerCardDetails?.info?.header}</span>
      </div>
      <div>
        <span>{offerCardDetails?.info?.couponCode}</span>
        <span>{" | " + offerCardDetails?.info?.description}</span>
      </div>
    </div>
  );
};

export default OfferCard;
