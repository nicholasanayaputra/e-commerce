import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import OurProducts from "./OurProducts";
const Home = () => {
  return (
    <section className="w-full h-[89vh] bg-heroImage bg-center bg-cover">
      <Banner />
      <Category />
      <OurProducts />
    </section>
  );
};

export default Home;
