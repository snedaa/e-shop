import React from "react";
import { Link } from "react-router-dom";

function ShopTitle() {
  return (
    <div className="relative">
      <div className="h-56">
        <img
          className="w-full h-full object-cover"
          src="https://cdn.shopify.com/s/files/1/0735/8726/1737/files/shop-banner.jpg?v=1680235225"
          alt=""
        />
      </div>
      <div className="absolute top-20 text-center w-full text-white">
        <h2 className="text-4xl mb-1">Shop</h2>
        <Link to="/home" className="text-gray-300 transition-all hover:text-gray-500">Home</Link>
      </div>
    </div>
  );
}

export default ShopTitle;
