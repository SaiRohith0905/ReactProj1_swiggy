import React, { useState, useEffect } from "react";
import SuggetionCard from "./SuggetionCard";
import WhatsOnYourMind from "./WhatsOnYourMind";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  async function searchSuggetions() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=12.9296796&lng=80.2348196&str=" +
        searchText +
        "&trackingId=null"
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    setSuggestions(jsonResponse?.data?.suggestions);
  }
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      searchSuggetions();
    }, 700);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
  return (
    <div className="w-[60%] mx-auto relative top-[120px]">
      <div className="mx-auto">
        <input
          type="search"
          placeholder="Search for restaurants and food"
          className="border border-solid border-white pl-3 w-[100%] rounded-lg h-[40px] mx-auto mt-6 mb-6 outline-none shadow-lg"
          onKeyDown={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>

      <div className="mx-auto">
        {suggestions?.map((eachitem) => {
          return <SuggetionCard eachsuggetion={eachitem} />;
        })}
      </div>
    </div>
  );
};

export default Search;
