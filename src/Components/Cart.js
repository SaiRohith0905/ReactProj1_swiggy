import React, { useContext } from "react";
import { CartContext } from "../Constants/CartContext";
import CartItem from "./CartItem";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);
  return (
    <div className="mx-auto w-[60%] relative top-[120px]">
      <div>
        <div className="text-center text-5xl text-lime-500  font-bold m-3">
          {" "}
          C A R T
        </div>
        <div
          className="text-lg font-medium absolute rounded-lg border-lime-500 bg-lime-500 text-white top-0 right-0 cursor-pointer border border-solid p-2 m-2"
          onClick={() => {
            {
              setCart([]);
            }
          }}
        >
          Clear cart!
        </div>
      </div>
      <div>
        {cart?.length > 0 ? (
          cart.map((eachitem) => {
            return <CartItem itemInfo={eachitem} />;
          })
        ) : (
          <div className="text-2xl text-center font-semibold mt-32">
            Oops, Seems your cart is empty
            <SentimentDissatisfiedIcon fontSize="large" />. Click{" "}
            <Link to="/" className="text-blue-400 cursor-pointer">
              here
            </Link>{" "}
            to view restaurants near you.
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
