import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/404/Error.jsx";
import About from "./components/about/About.jsx";
import CartPage from "./components/cartPage/CartPage.jsx";
import FeaturedProducts from "./components/featuredProducts/FeaturedProducts.jsx";
import Home from "./components/home/Home.jsx";
import Main from "./components/layout/Main.jsx";
import Orders from "./components/orders/Orders.jsx";
import ScrollTop from "./components/scrollToTop/ScrollTop.jsx";
import Shop from "./components/shop/Shop.jsx";
import ProductDetail from "./components/singleProduct/ProductDetail.jsx";
import { CartProvider } from "./context/cartContext.jsx";
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
        path: "/featured",
        element: <FeaturedProducts />,
        loader: async () => fetch("/products.json"),
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <ScrollTop />
    </CartProvider>
  </React.StrictMode>
);
