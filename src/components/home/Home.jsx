import React from "react";
import Brand from "../brand/Brand";
import CallToAction from "../call-to-action/CallToAction";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import Hero from "../hero/Hero";
import InstaFeed from "../insta/InstaFeed";
import Newsletter from "../newsletter/Newsletter";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Brand />
      <FeaturedProducts />
      <CallToAction />
      <InstaFeed />
      <Testimonial />
      <Newsletter />
    </>
  );
};

export default Home;
