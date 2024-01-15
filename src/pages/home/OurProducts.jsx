import React, { useState } from "react";
import CardProduct from "../../components/Fragments/CardProduct";
import { data } from "../../data/data";
const OurProducts = () => {
  const [products, setProducts] = useState(data);
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4">
      <h1 className="font-bold text-center text-2xl md:text-3xl text-gray-primary mb-8">
        Our Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.desc}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} discount={product.disc} />
          </CardProduct>
        ))}
      </div>
    </div>
  );
};
export default OurProducts;
