import React from "react";
import { useLoaderData } from "react-router-dom";
import Hero from "../hero/Hero";

const Home = () => {
  const products = useLoaderData();
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
