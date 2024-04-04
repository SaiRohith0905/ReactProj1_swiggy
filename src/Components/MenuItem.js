import React, { useContext, useEffect, useState } from "react";
import { MENU_ITEM_URL } from "../Constants/Images";
import { CartContext } from "../Constants/CartContext";
import { json } from "react-router-dom";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
const MenuItem = (props) => {
  // console.log(props);
  const [isVeg, setIsVeg] = useState(1);
  const { itemDetails, reqDetails } = props;
  const { cart, setCart } = useContext(CartContext);

  const updateCart = (cartItemDetails, restaurantDetails) => {
    console.log("existing cart :", cart);
    const existingCartItemIndex = cart.findIndex(
      (eachcartitem) =>
        eachcartitem?.cartItem?.card?.info?.name ===
          cartItemDetails?.card?.info?.name &&
        eachcartitem?.restaurant?.card?.card?.info?.name ===
          restaurantDetails?.card?.card?.info?.name
    );

    if (existingCartItemIndex != -1) {
      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity += 1;
      setCart(updatedCart);
      console.log("Updatedcart:", updatedCart);
    } else {
      const newCartItem = {
        cartItem: cartItemDetails,
        restaurant: restaurantDetails,
        quantity: 1,
      };
      const newCart = [...cart, newCartItem];
      setCart(newCart);
      console.log("new cart :", newCart);
    }
    // cart.push({
    //   cartItem: cartItemDetails,
    //   restaurant: restaurantDetails,
    // });
    // const newCart = cart.slice();
    // setCart(newCart);
  };

  function removeItemFromCart(cartItemDetails, restaurantDetails) {
    let selectedItemFromCart = cart.filter(
      (eachitem) =>
        eachitem?.cartItem?.card?.info?.name ==
          cartItemDetails?.card?.info?.name &&
        eachitem?.restaurant?.card?.card?.info?.name ==
          restaurantDetails?.card?.card?.info?.name
    );

    if (selectedItemFromCart.length > 0) {
      if (selectedItemFromCart[0].quantity == 1) {
        const updatedCart = cart.filter(
          (eachitem) =>
            eachitem?.cartItem?.card?.info?.name !==
              cartItemDetails?.card?.info?.name &&
            eachitem?.restaurant?.card?.card?.info?.name !==
              restaurantDetails?.card?.card?.info?.name
        );
        setCart(updatedCart);
      } else {
        console.log("Quantity reduce");

        selectedItemFromCart[0].quantity = selectedItemFromCart[0].quantity - 1;
        setCart([...cart]);
      }
    }
  }

  useEffect(() => {
    setIsVeg(itemDetails?.card?.info.isVeg);
  }, []);
  return (
    <div className="flex items-center m-1 border border-zinc-200 border-solid rounded-md">
      <div className="pl-4 pr-4 m-2 w-[80%]">
        <div className="mt-1 mb-1 text-lg font-semibold">
          {isVeg ? "Veg" : "Non-Veg"}
        </div>
        <div className="mt-2 mb-2 text-xl font-bold">
          {itemDetails?.card?.info?.name}
        </div>
        <div className="mt-2 mb-2 text-lg font-normal">
          <CurrencyRupeeRoundedIcon fontSize="small" />
          {itemDetails?.card?.info?.price / 100}
        </div>
        <div className="mt-2 mb-2 text-sm font-light">
          {itemDetails?.card?.info?.description}
        </div>
      </div>
      <div className="m-4 w-[20%] relative">
        {itemDetails?.card?.info?.imageId ? (
          <img
            className="rounded-md w-[100%]"
            src={MENU_ITEM_URL + itemDetails?.card?.info?.imageId}
          />
        ) : (
          ""
        )}
        <div className=" flex border border-solid border-lime-500 bg-lime-500 text-white pl-3 pr-3 pt-1 pb-1 rounded-lg absolute left-[27px] bottom-[-16px]">
          <div
            className="m-1 w-[30%] cursor-pointer  active:scale-[1.6] active:transition-transform duration-200"
            onClick={() => {
              removeItemFromCart(itemDetails, reqDetails);
            }}
          >
            -
          </div>
          <div className="m-1 w-[40%] font-medium">Add</div>
          <div
            className="hover:cursor-pointer active:scale-[1.6] active:transition-transform duration-200 m-1 w-[30%]"
            onClick={() => {
              updateCart(itemDetails, reqDetails);
            }}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
