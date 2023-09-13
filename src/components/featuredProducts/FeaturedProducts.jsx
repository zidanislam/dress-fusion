import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedFilter from "../featuredFilter/FeaturedFilter";
import Product from "../product/Product";

const FeaturedProducts = () => {
  const products = useLoaderData();
  const [featuredFilter, setFeaturedFilter] = useState([]);
  const [activeCat, setActiveCat] = useState("all");

  const featured = useMemo(() => {
    return products.filter((product) => product.featured === true);
  }, [products]);

  useEffect(() => {
    if (activeCat === "all") {
      setFeaturedFilter(featured);
    } else {
      const filteredProducts = featured.filter((product) =>
        product.category.includes(activeCat)
      );
      setFeaturedFilter(filteredProducts);
    }
  }, [featured, activeCat]);

  return (
    <>
      <div className="text-center 2xl:my-24 xl:my-24 px-6">
        <h2 className="2xl:text-5xl xl:text-3xl md:text-3xl text-2xl mb-3 text-gray-800">
          New Arrivals
        </h2>
        <p className="2xl:text-base md:text-sm text-xs xl:-mb-10 text-gray-700">
          Check out our featured and most popular products. Grab Before It's
          Gone!!!
        </p>
      </div>
      <FeaturedFilter setActiveCat={setActiveCat} activeCat={activeCat} />
      <motion.div
        layout
        className="grid gap-3 mx-auto col-span-3 2xl:px-80 xl:px-32 lg:px-20 md:px-6 px-6 2xl:my-16 xl:my-10 md:my-10 my-7 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-2"
      >
        <AnimatePresence>
          {featuredFilter.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default FeaturedProducts;
