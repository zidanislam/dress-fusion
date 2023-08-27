import React from "react";
import { useLoaderData } from "react-router-dom";
import Brand from "../brand/Brand";
import CallToAction from "../call-to-action/CallToAction";
import Hero from "../hero/Hero";
import InstaFeed from "../insta/InstaFeed";
import Newsletter from "../newsletter/Newsletter";

const Home = () => {
  const products = useLoaderData();
  return (
    <>
      <Hero />
      <Brand />
      <CallToAction />
      <InstaFeed />
      <Newsletter />
    </>
  );
};

export default Home;
