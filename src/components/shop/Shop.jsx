import { ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ListProduct from "../listProduct/ListProduct";
import Product from "../product/Product";

const Shop = () => {
  const [gridView, setGridView] = useState(true);
  const products = useLoaderData();
  const [initialSort, setInitialSort] = useState("a-z");
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSize, setActivesize] = useState("all");

  // Sorting functions
  const sortingFunctions = {
    "a-z": (a, b) => a.name.localeCompare(b.name),
    "z-a": (a, b) => b.name.localeCompare(a.name),
    lowest: (a, b) => a.price - b.price,
    highest: (a, b) => b.price - a.price,
  };

  // Filter and sort products
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .filter((product) =>
      activeCategory === "all" ? true : product.category === activeCategory
    )
    .sort(sortingFunctions[initialSort])

    .filter((product) =>
      activeSize === "all" ? true : product.sizes.includes(activeSize)
    );

  const handleUniqueData = (data, property) => {
    let uniqueValue = data.map((item) => {
      return item[property];
    });
    if (property === "sizes") {
      return (uniqueValue = ["all", ...new Set([].concat(...uniqueValue))]);
    } else {
      return (uniqueValue = ["all", ...new Set(uniqueValue)]);
    }
  };
  const categories = handleUniqueData(products, "category");
  const sizes = handleUniqueData(products, "sizes");

  const categoryAmount = {
    all: products.length,
  };
  products.forEach((product) => {
    const category = product.category || "uncategorized";
    categoryAmount[category]
      ? categoryAmount[category]++
      : (categoryAmount[category] = 1);
  });

  return (
    <div className="grid md:grid-cols-7 lg:gap-5 md:gap-3 2xl:px-80 xl:px-32 lg:px-20 md:px-6 2xl:my-16 xl:my-10 lg:my-8">
      {/* Sidebar */}
      {/* Search section */}
      <div className="md:col-span-2 top-0 flex flex-col justify-center px-6">
        <input
          type="text"
          value={query}
          placeholder="Search..."
          className="border-gray-400 rounded-lg border focus:outline-gray-500 p-2 md:w-4/5"
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* End of search section */}
        <div className="mt-12">
          <p className="text-lg font-semibold">Categories</p>
        </div>
        <div className="flex md:flex-col gap-5 my-4">
          {categories.map((category, index) => (
            <div
              className={`flex justify-between capitalize cursor-pointer ${
                activeCategory === category ? "font-bold" : ""
              }`}
              key={index}
              onClick={() => setActiveCategory(category)}
            >
              {category} ({categoryAmount[category] || 0})
            </div>
          ))}
        </div>
        <div className="my-5">
          <p className="text-lg font-semibold">Sizes:</p>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-7">
          {sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => setActivesize(size)}
              className={`border border-slate-300 px-4 py-2 rounded-lg capitalize ${
                activeSize === size ? "bg-black text-white" : ""
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="md:col-span-5 md:px-0 px-6">
        <div className="flex align-middle justify-between mb-5">
          <div className="flex align-middle gap-2">
            <Squares2X2Icon
              className={`h-8 w-8 bg-slate-200 border rounded-lg cursor-pointer p-1 ${
                gridView ? "bg-gray-400" : ""
              }`}
              onClick={() => setGridView(true)}
            />
            <ListBulletIcon
              className={`h-8 w-8 bg-slate-200 border rounded-lg cursor-pointer p-1 ${
                !gridView ? "bg-gray-400" : ""
              }`}
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
                value={initialSort}
                onChange={(e) => setInitialSort(e.target.value)}
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
            gridView
              ? "grid gap-2 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-2"
              : "grid gap-5 lg:grid-cols-1"
          }
        >
          {filteredProducts.length === 0 ? (
            <p className="text-xl flex justify-center align-middle">
              Hmm... it's not available
            </p>
          ) : (
            filteredProducts.map((product) => (
              <div key={product._id}>
                {gridView ? (
                  <Product product={product} />
                ) : (
                  <ListProduct product={product} />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;

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
