import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { CartContext } from "./Constants/CartContext";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        {/* <Body /> */}
        <div className="">
          <Outlet />
        </div>
      </CartContext.Provider>
    </>
  );
}

export default App;
