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
      <div className="text-center 2xl:my-24 xl:my-24">
        <h2 className="2xl:text-5xl xl:text-3xl mb-3 text-gray-800">
          New Arrivals
        </h2>
        <p className="2xl:text-base xl:text-sm -mb-10 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
          <br />
          ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
      </div>
      <FeaturedFilter setActiveCat={setActiveCat} activeCat={activeCat} />
      <motion.div
        layout
        className="grid gap-3 mx-auto col-span-3 lg:grid-cols-3"
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
