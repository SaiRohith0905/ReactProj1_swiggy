import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { ICON_URL } from "../Constants/Images";
import OfferCard from "./OfferCard";
import FoodItemCategory from "./FoodItemCategory";
import TimerRoundedIcon from "@mui/icons-material/TimerRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import TwoWheelerRoundedIcon from "@mui/icons-material/TwoWheelerRounded";
import ResMenuShimmer from "./ResMenuShimmer";
const ResMenu = () => {
  window.scrollTo(0, 0);
  const offers = useRef([]);
  const [isVeg, setIsVeg] = useState(false);
  const [resMenuDetails, setResMenuDetails] = useState([]);
  // console.log(resMenuDetails);
  const [mainDetails, setMainDetails] = useState({
    card: { card: { info: {} } },
  });

  const [resOfferDetails, setResOfferDetails] = useState({
    card: { card: { gridElements: { infoWithStyle: { offers: [] } } } },
  });
  const [menuDetails, setMenuDetails] = useState({
    groupedCard: { cardGroupMap: { REGULAR: { cards: [] } } },
  });
  // console.log(menuDetails);
  let { resId } = useParams();
  // console.log(resId);

  async function fetchResMenudetails() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonResponse = await response.json();
    // console.log(jsonResponse);
    setResMenuDetails(jsonResponse?.data?.cards);
    const [a, b, c] = jsonResponse?.data?.cards;
    setMainDetails(a);
    setResOfferDetails(b);
    setMenuDetails(c);
    // console.log(c);
    setIsVeg(
      c?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.isPureVeg
    );
  }

  async function searchSwiggy() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=13.0826802&lng=80.2707184&str=burg&trackingId=undefined"
    );
  }

  offers.current =
    resOfferDetails?.card?.card?.gridElements?.infoWithStyle?.offers;

  // console.log(offers);
  useEffect(() => {
    fetchResMenudetails();
    searchSwiggy();
  }, [resId]);

  const menuitemcategories =
    menuDetails?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1, -2);
  // console.log(menuitemcategories);
  return (
    <>
      {resMenuDetails?.length > 0 ? (
        <div className=" w-[60%] m-auto relative top-[120px]">
          <div className="">
            <div className="flex  border border-b-slate-200 border-b-[1px] border-b-dotted shadow-sm items-center">
              <div className="m-2">
                <h3 className="font-serif text-4xl m-2">
                  {mainDetails?.card?.card?.info?.name}
                </h3>
                <p className="font-extralight text-base m-2">
                  {mainDetails?.card?.card?.info?.cuisines?.join(", ")}
                </p>
                <span className="text-lg ml-2 mr-2 mt-2 mb-2">
                  {mainDetails?.card?.card?.info?.areaName}
                </span>
                <span className="text-lg m-2">
                  <TwoWheelerRoundedIcon fontSize="medium" />
                  {mainDetails?.card?.card?.info?.sla?.lastMileTravelString}
                </span>
                <div>
                  {mainDetails?.card?.card?.info?.feeDetails?.message ? (
                    <>
                      <img
                        className="inline-block m-2"
                        src={
                          ICON_URL +
                          mainDetails?.card?.card?.info?.feeDetails?.icon
                        }
                      />
                      <span>
                        {mainDetails?.card?.card?.info?.feeDetails?.message}
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="border border-solid ml-[230px] mr-[40px] w-[100px] rounded-lg text-lg text-green-500">
                <div className="m-2 text-center">
                  {mainDetails?.card?.card?.info?.avgRatingString}
                  <StarsRoundedIcon className="ml-1" />
                </div>
                <div className="border border-dotted border-b-black w-[100px] "></div>
                <div className="m-2 text-sm p-[4px]">
                  {mainDetails?.card?.card?.info?.totalRatingsString}
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 border border-b-slate-200 border-b-[1px] border-b-dotted shadow-sm rounded-lg">
            <div className="m-auto p-4">
              <div>
                {mainDetails?.card?.card?.info?.sla?.deliveryTime ? (
                  <span className="text-lg font-semibold p-2">
                    <TimerRoundedIcon />
                    {mainDetails?.card?.card?.info?.sla?.deliveryTime + " MINS"}
                  </span>
                ) : (
                  ""
                )}
                {mainDetails?.card?.card?.info?.costForTwoMessage ? (
                  <span className="text-lg font-medium p-2">
                    {mainDetails?.card?.card?.info?.costForTwoMessage}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="flex overflow-scroll w-[100%]">
                {offers?.current?.map((eachoffercard) => {
                  return <OfferCard offerCardDetails={eachoffercard} />;
                })}
              </div>
            </div>
          </div>

          <div className="">
            {isVeg ? (
              <div className="p-5 border border-dotted text-lg rounded-lg font-semibold text-lime-400">
                Pure Veg <i class="fa-light fa-seedling"></i>
              </div>
            ) : (
              ""
              // <div className="">Non Veg</div>
            )}
          </div>
          <div className="border border-b-slate-200 border-b-[1px] border-b-dotted shadow-sm rounded-lg">
            {menuitemcategories?.map((eachitemcategory) => {
              return (
                <FoodItemCategory
                  foodItemDetails={eachitemcategory}
                  reqDetails={mainDetails}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <ResMenuShimmer />
      )}
    </>
  );
};

export default ResMenu;
