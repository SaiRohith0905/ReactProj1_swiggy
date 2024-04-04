import React from "react";
import Heading from "./Heading";
import { TOP_RES_IMG_URL } from "../Constants/Images";
import { Link } from "react-router-dom";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import TimerRoundedIcon from "@mui/icons-material/TimerRounded";
const TopRestaurentsInLocation = (props) => {
  const { restaurants } =
    props?.topResDetails?.card?.card?.gridElements?.infoWithStyle;

  return (
    <>
      <Heading title={"Top restaurant chains in your Location"} />

      <div className="flex overflow-auto ">
        {restaurants?.map((eachres) => {
          return (
            <Link to={"/restaurants/" + eachres?.info?.id}>
              <div className="border-2 border-solid border-gray-100 shadow-md m-3 pb-2 w-[280px] h-[368px] hover:scale-[1.05] hover:border-lime-100 hover:transition-transform duration-700 rounded-md ">
                <div className="w-[278px] ">
                  <img
                    className="h-[220px] w-[100%] rounded-md"
                    src={TOP_RES_IMG_URL + eachres.info?.cloudinaryImageId}
                    alt="toprestaurent_image"
                    key={eachres?.info?.cloudinaryImageId}
                  />
                </div>
                <h3 className="text-lg font-semibold pl-2">
                  {eachres?.info?.name}
                </h3>
                <span className="m-1 text-base font-medium pl-1">
                  <StarRoundedIcon fontSize="small" className="mr-1" />
                  {eachres?.info?.avgRating}
                </span>
                <span className="text-base font-medium m-1 pl-1">
                  <TimerRoundedIcon fontSize="small" className="mr-1" />
                  {eachres?.info?.sla?.deliveryTime} mins
                </span>
                <div className="text-sm font-light m-1 pl-1 w-[256px] overflow-hidden whitespace-nowrap text-ellipsis">
                  {eachres?.info?.cuisines.join(", ")}
                </div>
                <div className="pl-2 text-sm font-light">
                  {eachres?.info?.locality}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default TopRestaurentsInLocation;
