import React from "react";
import Banner from "./Banner";
import Category from "./Category";
const Home = () => {
  return (
    <section className="w-full h-[89vh] bg-heroImage bg-center bg-cover">
      <Banner />
      <Category />
    </section>
  );
};

export default Home;
