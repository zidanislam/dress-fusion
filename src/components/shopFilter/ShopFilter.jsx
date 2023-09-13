import React from "react";

const ShopFilter = ({
  setActiveCategory,
  setActivesize,
  setQuery,
  query,
  categories,
  activeCategory,
  categoryAmount,
  sizes,
  activeSize,
}) => {
  return (
    <div>
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
  );
};

export default ShopFilter;
