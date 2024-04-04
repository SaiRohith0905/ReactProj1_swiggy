import React, { useState } from "react";
import MenuItem from "./MenuItem";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";

const MenuItemCategory = (props) => {
  // console.log(props);
  const [displayItems, setDisplayItems] = useState(true);
  const { categoryTitle, categoryDetails } = props;
  return (
    <div className="">
      <div
        className="flex justify-between"
        onClick={() => {
          setDisplayItems(!displayItems);
        }}
      >
        <div>
          <span className="text-xl font-bold">{categoryDetails?.title}</span>
          <span className="text-xl font-bold">
            {"(" + categoryDetails?.itemCards?.length + ")"}
          </span>
        </div>
        <div>
          {displayItems ? (
            <ArrowDropUpRoundedIcon fontSize="large" />
          ) : (
            <ArrowDropDownRoundedIcon fontSize="large" />
          )}
        </div>
      </div>
      {displayItems && (
        <div>
          {categoryDetails?.itemCards?.map((eachitem) => {
            return <MenuItem itemDetails={eachitem} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MenuItemCategory;
