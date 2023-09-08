import { ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ListProduct from "../listProduct/ListProduct";
import Product from "../product/Product";
import ShopFilter from "../shopFilter/ShopFilter";

const Shop = () => {
  const [gridView, setGridView] = useState(true);
  const products = useLoaderData();
  const [sortedItem, setSortedItem] = useState([]);
  const [initialSort, setInitialSort] = useState("a-z");

  const sorting = () => {
    let userSelection = document.getElementById("sort");
    let selected = userSelection.options[userSelection.selectedIndex].value;
    setInitialSort(selected);
  };
  useEffect(() => {
    const selectedSort = [...products];
    let newSort;

    const sortingFunctions = {
      "a-z": (a, b) => a.name.localeCompare(b.name),
      "z-a": (a, b) => b.name.localeCompare(a.name),
      lowest: (a, b) => a.price - b.price,
      highest: (a, b) => b.price - a.price,
    };

    if (initialSort in sortingFunctions) {
      newSort = selectedSort.sort(sortingFunctions[initialSort]);
      setSortedItem(newSort);
    }
    // let newSort;
    // let selectedSort = [...products];
    // if (initialSort === "a-z") {
    //   newSort = selectedSort.sort((a, b) => a.name.localeCompare(b.name));
    //   setSortedItem(newSort);
    // } else if (initialSort === "z-a") {
    //   newSort = selectedSort.sort((a, b) => b.name.localeCompare(a.name));
    //   setSortedItem(newSort);
    // } else if (initialSort === "lowest") {
    //   newSort = selectedSort.sort((a, b) => a.price - b.price);
    //   setSortedItem(newSort);
    // } else if (initialSort === "highest") {
    //   newSort = selectedSort.sort((a, b) => b.price - a.price);
    //   setSortedItem(newSort);
    // }
  }, [products, initialSort]);

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="mx-auto col-span-3">
        <ShopFilter />
      </div>
      <div className="col-span-8">
        <div className="flex align-middle justify-between mb-5">
          <div className="flex align-middle gap-2">
            <Squares2X2Icon
              className="h-8 w-8 bg-slate-200 border rounded-lg cursor-pointer p-1"
              onClick={() => setGridView(true)}
            />
            <ListBulletIcon
              className="h-8 w-8 bg-slate-200 border rounded-lg cursor-pointer p-1"
              onClick={() => setGridView(false)}
            />
          </div>
          <div>
            <form action="#">
              <label htmlFor="sort"></label>
              <select
                name="sort"
                className=" p-1 border border-gray-400 focus:border-gray-400 rounded-lg"
                id="sort"
                onClick={sorting}
              >
                <option value="a-z">Name (A-Z)</option>
                <option value="z-a">Name (Z-A)</option>
                <option value="lowest">Price (lowest)</option>
                <option value="highest">Price (highest)</option>
              </select>
            </form>
          </div>
        </div>
        <div
          className={
            gridView ? "grid gap-5 lg:grid-cols-3" : "grid gap-5 lg:grid-cols-1"
          }
        >
          {gridView
            ? sortedItem.map((product) => (
                <Product key={product._id} product={product} />
              ))
            : sortedItem.map((product) => (
                <ListProduct key={product._id} product={product} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
