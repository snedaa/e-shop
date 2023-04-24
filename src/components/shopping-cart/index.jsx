import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FaShuttleVan } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import { TbPencilMinus } from "react-icons/tb";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

import "./shoppingCart.css";

function ShoppingCart({ setBasketActive, basketActive }) {
  return (
    <div className="bg-[rgba(0,0,0,.5)] top-0 h-screen left-0 !w-full z-10 absolute">
      <div
        className={`basket-container text-black overflow-hidden !z-10 right-0 absolute bg-white ${
          basketActive ? "basket-open" : "basket-closed"
        }`}
        // style={{
        //   width: basketActive ? "35%" : "0",
        //   height: basketActive ? "100%" : "0",
        //   transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
        // }}
      >
        <div className="flex items-center py-5 justify-between">
          <h3 className="text-gray-900 text-lg ml-4 py-1">Shopping Cart</h3>
          <RxCross2
            className="cursor-pointer mr-3"
            onClick={() => setBasketActive(false)}
          />
        </div>

        <div className="px-10 border bg-zinc-500 bg-opacity-5 h-28 flex flex-col justify-center">
          <div className="h-1 w-full rounded bg-red-600 relative"></div>
          <div className="p-1 absolute right-4 top-24 mt-1 bg-zinc-100 border-red-600 border rounded-full">
            <FaShuttleVan className="text-red-600" />
          </div>
          <span className="mt-4">
            Congratulations! You've got free shipping!
          </span>
        </div>

        <div className="flex items-center justify-center mx-5 h-16 border-b border-dashed">
          <BsFire className="text-red-700 mr-1" />
          <span className="text-sm">
            You're out of time! Checkout now to avoid losing your order!
          </span>
        </div>

        <div className="basket-product h-[30%] overflow-y-scroll">
          <div className="flex justify-around p-5 overflow-auto">
            <img
              className="w-24 mr-3 rounded"
              src="https://cdn.shopify.com/s/files/1/0735/8726/1737/products/fashion_products_22_1_35bfb1ff-ba53-4183-8165-40ad7779a8a7.jpg?v=1680169369&width=360"
              alt=""
            />
            <div className="flex flex-col pr-16">
              <span>Square Textured Striped T-shirt</span>
              <span className="my-2">Green</span>
              <span>$116.00</span>

              <div className="bg-zinc-100 mt-3 rounded border  border-gray-200 w-24 h-8 flex items-center justify-evenly">
                <span className="cursor-pointer">
                  <AiOutlineMinus />
                </span>
                <span>1</span>
                <span className="cursor-pointer">
                  <AiOutlinePlus />
                </span>
              </div>
            </div>

            <div>
              <BiTrash className="text-gray-500 transition-all cursor-pointer hover:text-black mb-1" />
              <TbPencilMinus className="text-gray-500 transition-all cursor-pointer hover:text-black" />
            </div>
          </div>
          <div className="flex justify-around p-5 overflow-auto">
            <img
              className="!w-24 mr-3 rounded "
              src="https://cdn.shopify.com/s/files/1/0735/8726/1737/products/fashion_products_22_1_35bfb1ff-ba53-4183-8165-40ad7779a8a7.jpg?v=1680169369&width=360"
              alt=""
            />
            <div className="flex flex-col pr-16">
              <span>Square Textured Striped T-shirt</span>
              <span className="my-2">Green</span>
              <span>$116.00</span>

              <div className="bg-zinc-100 mt-3 rounded border  border-gray-200 w-24 h-8 flex items-center justify-evenly">
                <span className="cursor-pointer">
                  <AiOutlineMinus />
                </span>
                <span>1</span>
                <span className="cursor-pointer">
                  <AiOutlinePlus />
                </span>
              </div>
            </div>

            <div>
              <BiTrash className="text-gray-500 transition-all cursor-pointer hover:text-black mb-1" />
              <TbPencilMinus className="text-gray-500 transition-all cursor-pointer hover:text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
