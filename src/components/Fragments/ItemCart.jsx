import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Delete } from "../../assets";
const ItemCart = () => {
  const { getTotalCartAmount, allProducts, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="grid grid-cols-12 gap-4">
      <table className="w-full text-center md:col-span-8 col-span-12">
        <thead className="bg-[#F9F1E7] ">
          <tr>
            <td className="p-2 font-medium text-base"></td>
            <td className="p-2 font-medium text-base">Product</td>
            <td className="p-2 font-medium text-base">Price</td>
            <td className="p-2 font-medium text-base">Quantity</td>
            <td className="p-2 font-medium text-base">Subtotal</td>
            <td className="p-2 font-medium text-base"></td>
          </tr>
        </thead>
        <tbody className=" ">
          {allProducts.map((product) => {
            if (cartItems[product.id] > 0) {
              return (
                <tr key={product.id}>
                  <td className="md:pt-10 pt-4 text-[#9F9F9F] font-medium text-xs md:text-base">
                    <img
                      src={product.image}
                      alt=""
                      className="w-[80px] md:w-[200px] rounded-md"
                    />
                  </td>
                  <td className="md:pt-10 pt-4 text-[#9F9F9F] font-medium text-xs md:text-base">
                    {product.name}
                  </td>
                  <td className="md:pt-10 pt-4 text-[#9F9F9F] font-medium text-xs md:text-base">
                    Rp {product.price}
                  </td>
                  <td className="md:pt-10 pt-4 text-[#9F9F9F] font-medium text-xs md:text-base">
                    {cartItems[product.id]}
                  </td>
                  <td className="md:pt-10 pt-4 text-[#9F9F9F] font-medium text-xs md:text-base">
                    Rp {product.price * cartItems[product.id]}
                  </td>
                  <td className="md:pt-10 pt-4 text-[#9F9F9F] font-medium text-xs md:text-base">
                    <img
                      src={Delete}
                      alt=""
                      className="w-4 h-4 cursor-pointer"
                      onClick={() => removeFromCart(product.id)}
                    />
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      <div className="md:col-span-4 col-span-12">
        <div className="bg-[#F9F1E7] p-4 text-center">
          <h1 className="text-xl md:text-2xl font-bold my-4">Cart Totals</h1>
          <div className="flex justify-between mx-20 items-center">
            <h4 className="font-medium text-sm md:text-base">Subtotal</h4>
            <p className="text-[#9F9F9F] text-sm md:text-base">
              Rp {getTotalCartAmount()}
            </p>
          </div>
          <div className="flex justify-between mx-20 items-center my-4 md:my-6">
            <h4 className="font-medium text-sm md:text-base">total</h4>
            <p className="text-[#B88E2F] text-sm md:text-base">
              Rp {getTotalCartAmount()}
            </p>
          </div>
          <div>
            <button className="border border-black rounded-2xl py-2 px-6">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
