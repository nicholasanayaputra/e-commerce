import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import OurProducts from "./OurProducts";
import Carousel from "./carousel";
import Share from "./Share";
import Footer from "./Footer";
const Home = () => {
  return (
    <section className="w-full h-[89vh] bg-heroImage bg-center bg-cover">
      <Banner />
      <Category />
      <OurProducts />
      <Carousel />
      <Share />
      <Footer />
    </section>
  );
};

export default Home;
