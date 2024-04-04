import React, { useState } from "react";
import MenuItem from "./MenuItem";
import MenuItemCategory from "./MenuItemCategory";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded"; // import
const FoodItemCategory = (props) => {
  const [displayCategory, setDisplayCategory] = useState(true);
  const { foodItemDetails, reqDetails } = props;
  // console.log(foodItemDetails);
  return (
    <div className="border border-solid border-b-gray-200 m-2 pl-3 pr-3 pt-2 pb-2">
      <div
        className="flex justify-between "
        onClick={() => {
          setDisplayCategory(!displayCategory);
        }}
      >
        <div>
          <span className="text-xl font-bold">
            {foodItemDetails?.card?.card?.title}
          </span>
          <span className="text-xl font-bold">
            {foodItemDetails?.card?.card?.itemCards
              ? "(" + foodItemDetails?.card?.card?.itemCards?.length + ")"
              : "(" + foodItemDetails?.card?.card?.categories?.length + ")"}
          </span>
        </div>
        <div className="">
          {displayCategory ? (
            <ArrowDropUpRoundedIcon fontSize="large" />
          ) : (
            <ArrowDropDownRoundedIcon fontSize="large" />
          )}
        </div>
      </div>
      {displayCategory && (
        <div>
          {foodItemDetails?.card?.card?.itemCards
            ? foodItemDetails?.card?.card?.itemCards?.map((eachitem) => {
                return (
                  <MenuItem itemDetails={eachitem} reqDetails={reqDetails} />
                );
              })
            : foodItemDetails?.card?.card?.categories?.map((eachitem) => {
                return (
                  <MenuItemCategory
                    categoryDetails={eachitem}
                    reqDetails={reqDetails}
                  />
                );
              })}
        </div>
      )}
    </div>
  );
};

export default FoodItemCategory;
