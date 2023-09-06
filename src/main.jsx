import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/about/About.jsx";
import CartIcon from "./components/cartIcon/CartIcon.jsx";
import Contact from "./components/contact/Contact.jsx";
import Home from "./components/home/Home.jsx";
import Main from "./components/layout/Main.jsx";
import Orders from "./components/orders/Orders.jsx";
import ScrollTop from "./components/scrollToTop/ScrollTop.jsx";
import Shop from "./components/shop/Shop.jsx";
import ProductDetail from "./components/singleProduct/ProductDetail.jsx";
import { AllProductsProvider } from "./context/productContext.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: () => fetch("products.json"),
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllProductsProvider>
      <RouterProvider router={router} />
      <CartIcon />
      <ScrollTop />
    </AllProductsProvider>
  </React.StrictMode>
);
