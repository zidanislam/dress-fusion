import React from "react";
import { useLoaderData } from "react-router-dom";
import Brand from "../brand/Brand";
import Hero from "../hero/Hero";

const Home = () => {
  const products = useLoaderData();
  return (
    <>
      <Hero />
      <Brand />
    </>
  );
};

export default Home;
