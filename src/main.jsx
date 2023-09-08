import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/about/About.jsx";
import CartIcon from "./components/cartIcon/CartIcon.jsx";
import Contact from "./components/contact/Contact.jsx";
import Home from "./components/home/Home.jsx";
import Main from "./components/layout/Main.jsx";
import Orders from "./components/orders/Orders.jsx";
import Product from "./components/product/Product.jsx";
import ScrollTop from "./components/scrollToTop/ScrollTop.jsx";
import Shop from "./components/shop/Shop.jsx";
import ProductDetail from "./components/singleProduct/ProductDetail.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => fetch("/products.json"),
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: async () => fetch("/products.json"),
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />,
        loader: async () => fetch("/products.json"),
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
      {
        path:"/product",
        element: <Product/>,
        loader: async () => fetch("/products.json"),
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <CartIcon />
    <ScrollTop />
  </React.StrictMode>
);
