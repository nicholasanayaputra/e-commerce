import { Link, useParams } from "react-router-dom";
import allProducts from "../data/data";
import { IoIosArrowForward } from "react-icons/io";
import Star from "../assets/Image/star.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Purple, Black, Yellow } from "../assets";
import Description from "../components/Fragments/Description";
import Footer from "./home/Footer";

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <div className="w-full">
      <div className="flex items-center px-20 gap-5 h-[100px] bg-[#f9f1e7]">
        <Link to="/">
          <h1 className="text-[#9F9F9F]">Home </h1>
        </Link>
        <IoIosArrowForward />
        <Link to="/shop">
          <h1 className="text-[#9F9F9F]">Shop</h1>
        </Link>
        <h1 className="border-l-2 border-[#9F9F9F] pl-4">
          {allProducts[id - 1].name}
        </h1>
      </div>
      <div className="grid grid-cols-12 px-6 md:gap-12">
        <div className="col-span-12 md:col-span-6">
          <div className="py-4">
            <img
              src={allProducts[id - 1].image}
              alt=""
              className="h-auto w-full object-cover rounded-md"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 py-4 lg:flex lg:flex-col lg:justify-center">
          <div>
            <h1 className="font-bold text-2xl text-gray-primary">
              {allProducts[id - 1].name}
            </h1>
            <p className="text-sm py-1 font-medium text-gray-secondary">
              Rp{" "}
              {allProducts[id - 1].price.toLocaleString("id-ID", {
                styles: "currency",
                currency: "IDR",
              })}
            </p>
            <div className="flex items-center gap-2 py-1">
              <img src={Star} alt="" />
              <span className="border-l-[1px] border-gray-fourth pl-2 text-sm font-medium text-gray-secondary">
                5 Customer Review
              </span>
            </div>
            <p className="text-xs py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              quisquam! Fugit voluptatum ut ducimus modi. Consequuntur,
              voluptates nam minima, soluta esse sint aliquid omnis.
            </p>
          </div>
          <h4 className="text-sm text-gray-fourth pb-2">Color</h4>
          <div className="flex gap-2 py-2">
            <img src={Purple} alt="" />
            <img src={Black} alt="" />
            <img src={Yellow} alt="" />
          </div>
          <div>
            <div className="flex-auto flex space-x-4 pb-12">
              <button
                className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                type="button"
              >
                Add to bag
              </button>
              <button
                className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                type="button"
                aria-label="Like"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:py-8 md:border-t-2">
            <table className="table-auto border-separate text-[#9F9F9F] text-sm font-medium border-spacing-2">
              <tr>
                <td>SKU</td>
                <td>:</td>
                <td>SS01</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>:</td>
                <td>{allProducts[id - 1].category}</td>
              </tr>
              <tr>
                <td>Tags</td>
                <td>:</td>
                <td>
                  {allProducts[id - 1].category}, {allProducts[id - 1].name},
                  Home, Shop
                </td>
              </tr>
              <tr>
                <td>Share</td>
                <td>:</td>
                <td className="flex items-center gap-2">
                  <FaFacebook className="w-4 h-4 text-black" />
                  <FaLinkedin className="w-4 h-4 text-black" />
                  <FaTwitter className="w-4 h-4 text-black" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Description image={allProducts[id - 1].image} />
      <Footer />
    </div>
  );
};

export default SingleProduct;
