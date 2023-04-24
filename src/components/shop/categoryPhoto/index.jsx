import React from "react";
import { Link } from "react-router-dom";
import "./categoryPhoto.css";

function CategoryPhoto() {
  return (
    <div className="flex justify-evenly items-center my-16">
      <div className="relative overflow-hidden">
        <img
          className="category-img"
          src="https://cdn.shopify.com/s/files/1/0735/8726/1737/collections/2.jpg?v=1680245056&width=330"
          alt=""
        />

        <button className="category-btn">
          <Link>Shirts</Link>
        </button>
      </div>

      <div className="relative overflow-hidden">
        <img
          className="category-img"
          src="https://cdn.shopify.com/s/files/1/0735/8726/1737/collections/3.jpg?v=1680245111&width=330"
          alt=""
        />

        <button className="category-btn">
          <Link>Shirts</Link>
        </button>
      </div>

      <div className="relative overflow-hidden">
        <img
          className="category-img"
          src="https://cdn.shopify.com/s/files/1/0735/8726/1737/collections/collection2.jpg?v=1680244866&width=330"
          alt=""
        />

        <button className="category-btn">
          <Link>Shirts</Link>
        </button>
      </div>

      <div className="relative overflow-hidden">
        <img
          className="category-img"
          src="https://cdn.shopify.com/s/files/1/0735/8726/1737/collections/collection8.jpg?v=1680244832&width=330"
          alt=""
        />

        <button className="category-btn">
          <Link>Shirts</Link>
        </button>
      </div>

      <div className="relative overflow-hidden">
        <img
          className="category-img"
          src="https://cdn.shopify.com/s/files/1/0735/8726/1737/collections/collection11.jpg?v=1680245095&width=330"
          alt=""
        />

        <button className="category-btn">
          <Link>Shirts</Link>
        </button>
      </div>
    </div>
  );
}

export default CategoryPhoto;
