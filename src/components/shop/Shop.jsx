import { ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShopFilter from "../filter/ShopFilter";
import ListProduct from "../listProduct/ListProduct";
import Product from "../product/Product";

const Shop = () => {
  const [gridView, setGridView] = useState(true);
  const products = useLoaderData();

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="mx-auto col-span-3">
        <ShopFilter />
      </div>
      <div className="col-span-8">
        <div className="flex my-5 gap-2">
          <Squares2X2Icon
            className="h-5 w-5 bg-slate-200 border rounded-lg cursor-pointer"
            onClick={() => setGridView(true)}
          />
          <ListBulletIcon
            className="h-5 w-5 bg-slate-200 border rounded-lg cursor-pointer"
            onClick={() => setGridView(false)}
          />
        </div>
        <div
          className={
            gridView ? "grid gap-5 lg:grid-cols-3" : "grid gap-5 lg:grid-cols-1"
          }
        >
          {gridView
            ? products.map((product) => (
                <Product key={product._id} product={product} />
              ))
            : products.map((product) => (
                <ListProduct key={product._id} product={product} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
