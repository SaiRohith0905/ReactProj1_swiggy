import { APPLOGO_URL } from "../Constants/Images";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { CartContext } from "../Constants/CartContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Header = () => {
  const cartItems = useContext(CartContext);
  // console.log(cartItems);
  const { cart } = cartItems;
  let cartLength = 0;
  cart.map((cartItem) => {
    cartLength += cartItem.quantity;
  });

  return (
    <div className="border-2 border-solid fixed bg-white z-20 top-0 w-[100%] border-gray-200 h-[120px]  shadow-xl flex ">
      <div className="mt-5">
        <Link to="/">
          <img
            src={APPLOGO_URL}
            alt="APP_LOGO"
            className=" w-[230px] h-[70px]"
          />
        </Link>
      </div>
      {/* <input
        type="search"
        placeholder="Search"
        className="h-[42px] rounded-l-3xl rounded-r-3xl mt-8 ml-10"
      /> */}
      <span className="text-xl mt-10 ml-[84px]  hover:text-orange-300 hover:cursor-pointer">
        <Link to="/search">
          Search <SearchOutlinedIcon />
        </Link>
      </span>
      <span className="text-xl mt-10 ml-[200px]  hover:text-orange-300 ">
        <Link to="/">Home</Link>
      </span>
      <span className="text-xl mt-10 ml-[84px]  hover:text-orange-300  hover:cursor-pointer ">
        <Link to="/help">Help</Link>
      </span>
      <span className="text-xl mt-10 ml-[84px]  hover:text-orange-300 ">
        <Link to="/aboutus">About Us</Link>
      </span>

      <span className="text-xl mt-10 ml-[84px]  hover:text-orange-300 ">
        <Link to="/cart">
          Cart
          <ShoppingCartOutlinedIcon />({cartLength})
        </Link>
      </span>
    </div>
  );
};

export default Header;
