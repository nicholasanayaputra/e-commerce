/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CardProduct from "../../components/Fragments/CardProduct";
import { Link } from "react-router-dom";
import allProducts from "../../data/data";
const OurProducts = () => {
  const [products, setProducts] = useState(allProducts);

  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4">
      <h1 className="font-bold text-center text-2xl md:text-3xl text-gray-primary mb-8">
        Our Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.slice(0, 8).map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} product={product.id} />
            <CardProduct.Body name={product.name}>
              {product.desc}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} discount={product.disc} />
          </CardProduct>
        ))}
      </div>
      <Link to={"/shop"} className="flex justify-center items-center mt-8">
        <button className=" border border-yellow text-yellow md:px-24 px-5 py-2 font-bold text-base hover:bg-yellow hover:text-white">
          Show More
        </button>
      </Link>
    </div>
  );
};
export default OurProducts;
