import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Help from "./Components/Help";
import ResMenu from "./Components/ResMenu";
import Cart from "./Components/Cart";
import Search from "./Components/Search";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import About from "./Components/About";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/search", element: <Search /> },
      { path: "/help", element: <Help /> },
      { path: "/aboutus", element: <About /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurants/:resId", element: <ResMenu /> },
      // restaurants/kfc-express-avenue-food-court-thousand-lights-chennai-56197
    ],
  },
]);

root.render(
  // <React.StrictMode>
  <RouterProvider router={appRouter} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
