import React from "react";

const FeaturedFilter = ({ setActiveCat, activeCat }) => {
  return (
    <div className="flex justify-center my-10">
      <button
        className={
          activeCat === "all"
            ? "bg-black text-white border border-black hover:bg-black hover:text-white mx-3 py-2.5 px-5 text-base rounded-lg"
            : "bg-white text-black border border-black hover:bg-black hover:text-white mx-3 py-2.5 px-5 text-base rounded-lg"
        }
        onClick={() => setActiveCat("all")}
      >
        All
      </button>
      <button
        className={
          activeCat === "men"
            ? "bg-black text-white border border-black hover:bg-black hover:text-white mx-3 py-2.5 px-5 text-base rounded-lg"
            : "bg-white text-black border border-black hover:bg-black hover:text-white mx-3 py-2.5 px-5 text-base rounded-lg"
        }
        onClick={() => setActiveCat("men")}
      >
        Men
      </button>
      <button
        className={
          activeCat === "female"
            ? "bg-black text-white border border-black hover:bg-black hover:text-white mx-3 py-2.5 px-5 text-base rounded-lg"
            : "bg-white text-black border border-black hover:bg-black hover:text-white mx-3 py-2.5 px-5 text-base rounded-lg"
        }
        onClick={() => setActiveCat("female")}
      >
        Women
      </button>
      <button
        className={
          activeCat === "kids"
            ? "bg-black text-white border border-black hover:bg-black hover:text-white mx-3 py-2.5 px-5 text-base rounded-lg"
            : "bg-white text-black border border-black hover:bg-black hover:text-white mx-3 py-2.5 px-5 text-base rounded-lg"
        }
        onClick={() => setActiveCat("kids")}
      >
        Kids
      </button>
    </div>
  );
};

export default FeaturedFilter;
