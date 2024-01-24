/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CardShop from "../../components/Fragments/CardShop";
import { FaFilter } from "react-icons/fa";
import { data } from "../../data/data";
import Pagination from "./Pagination";

const FilteredShop = () => {
  const [products, setProducts] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const filteredShop = (category) => {
    setProducts(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const handleSortChange = (option) => {
    switch (option) {
      case "A-Z":
        setProducts([...products].sort((a, b) => a.name.localeCompare(b.name)));
        break;
      case "Z-A":
        setProducts([...products].sort((a, b) => b.name.localeCompare(a.name)));
        break;
      case "low-to-high":
        setProducts([...products].sort((a, b) => a.price - b.price));
        break;
      case "high-to-low":
        setProducts([...products].sort((a, b) => b.price - a.price));
        break;
      default:
        break;
    }
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 bg-[#f9f1e7] py-8">
        {/* All btn */}
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex items-center gap-4 justify-center font-semibold">
            <button
              onClick={() => setProducts(data)}
              className="hover:text-yellow text-gray-primary"
            >
              All
            </button>
            <button
              onClick={() => filteredShop("table")}
              className="hover:text-yellow text-gray-primary"
            >
              Table
            </button>
            <button
              onClick={() => filteredShop("sofa")}
              className="hover:text-yellow text-gray-primary"
            >
              Sofa
            </button>
            <button
              onClick={() => filteredShop("lamp")}
              className="hover:text-yellow text-gray-primary"
            >
              Lamp
            </button>
            <button
              onClick={() => filteredShop("kitchen")}
              className="hover:text-yellow text-gray-primary"
            >
              Kitchen
            </button>
          </div>

          {/* Sorting option */}
          <div className="flex gap-2 items-center justify-center">
            <div>
              <FaFilter className="w-4 h-4" />
            </div>
            <select onChange={(e) => handleSortChange(e.target.value)}>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low To High</option>
              <option value="high-to-low">High To Low</option>
            </select>
          </div>
        </div>
      </div>
      <CardShop products={currentPosts} />
      <Pagination
        totalPosts={products.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default FilteredShop;
