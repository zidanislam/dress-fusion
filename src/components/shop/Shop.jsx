import { ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShopFilter from "../filter/ShopFilter";
import ListProducts from "../listProducts/ListProducts";
import Products from "../products/Products";

const Shop = () => {
  const [gridView, setGridView] = useState(true);
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="mx-auto col-span-3">
        <ShopFilter />
      </div>
      <div className="col-span-8">
        <div className="flex my-5 gap-2">
          <Squares2X2Icon className="h-5 w-5 bg-slate-200 border rounded-lg cursor-pointer" onClick={()=>setGridView(true)} />
          <ListBulletIcon className="h-5 w-5 bg-slate-200 border rounded-lg cursor-pointer" onClick={()=>setGridView(false)} />
        </div>
        <div>
          {gridView ? <Products /> : <ListProducts />}
        </div>
      </div>
    </div>
  );
};

export default Shop;
