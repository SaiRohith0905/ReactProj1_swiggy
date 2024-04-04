import React, { useContext } from "react";
import { CartContext } from "../Constants/CartContext";
import { MENU_ITEM_URL } from "../Constants/Images";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";

const CartItem = (props) => {
  const { cartItem, restaurant, quantity } = props?.itemInfo;
  console.log(cartItem, restaurant, quantity);
  let { cart, setCart } = useContext(CartContext);

  function removeSameItemFromCart() {
    let updatedCart = cart.map((eachitem) => {
      if (
        eachitem?.restaurant?.card?.card?.info?.id ==
          restaurant?.card?.card?.info?.id &&
        eachitem?.cartItem?.card?.info?.name == cartItem?.card?.info?.name
      ) {
        if (eachitem?.quantity > 1) {
          eachitem.quantity = eachitem.quantity - 1;
          return eachitem;
        } else {
          cart = cart?.filter((eachitem) => {
            return (
              eachitem?.restaurant?.card?.card?.info?.id !==
              restaurant?.card?.card?.info?.id
            );
          });
        }
      } else {
        return eachitem;
      }
    });
    setCart(updatedCart);
  }
  function addSameItemToCart() {
    let updatedCart = cart?.map((eachitem) => {
      if (eachitem?.cartItem?.card?.info?.id === cartItem?.card?.info?.id) {
        eachitem.quantity = eachitem.quantity + 1;
        return eachitem;
      } else {
        return eachitem;
      }
    });
    setCart(updatedCart);
  }

  return (
    <div className="bg-white shadow-lg rounded-lg m-3 p-4 flex justify-between">
      <div>
        <div className="text-xl font-bold p-2">
          {restaurant?.card?.card?.info?.name}
        </div>
        <div className="text-base font-light p-2">
          {restaurant?.card?.card?.info?.locality}
        </div>
        <div className="flex text-center">
          <div className="text-lg font-semibold p-2">
            {cartItem?.card?.info?.name}
          </div>
          <div className="inline-block ml-2 mr-2">
            <div className=" flex border border-solid border-lime-500 bg-lime-500 text-white pl-3 pr-3 pt-1 pb-1 rounded-lg">
              <div
                className="m-1 w-[30%] cursor-pointer  active:scale-[1.6] active:transition-transform duration-200"
                onClick={() => {
                  removeSameItemFromCart(cartItem, restaurant, quantity);
                }}
              >
                -
              </div>
              <div className="m-1 w-[40%] font-medium">{quantity}</div>
              <div
                className="hover:cursor-pointer active:scale-[1.6] active:transition-transform duration-200 m-1 w-[30%]"
                onClick={() => {
                  addSameItemToCart();
                }}
              >
                +
              </div>
            </div>
          </div>
          <div className="text-lg font-medium p-2">
            <CurrencyRupeeRoundedIcon />
            {(cartItem?.card?.info?.price / 100) * quantity}
          </div>
        </div>
      </div>
      <div>
        {cartItem?.card?.info?.imageId ? (
          <img
            className="rounded-lg"
            src={MENU_ITEM_URL + cartItem?.card?.info?.imageId}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartItem;
