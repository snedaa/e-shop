import React from "react";
import "./product.css";

function Product() {
  return (
    <div className="flex justify-center">
      <div className="product-container">
        <div className="image-container">
          <img
            className="normal-img"
            src="https://cdn.shopify.com/s/files/1/0735/8726/1737/products/fashion_products_22_1_35bfb1ff-ba53-4183-8165-40ad7779a8a7.jpg?v=1680169369&width=600"
            alt=""
          />
          <img
            className="hover-img"
            src="https://cdn.shopify.com/s/files/1/0735/8726/1737/products/fashion_products_22_2_c238fe43-81a4-447f-a039-c1257bce442a.jpg?v=1680169369&width=600"
            alt=""
          />
        </div>

        <div className="flex flex-col">
          <span>Title</span>
          <span>favori</span>
          <span>$Fiyat</span>
        </div>
      </div>
      <div className="product-container">
        <div className="image-container">
          <img
            className="normal-img"
            src="https://cdn.shopify.com/s/files/1/0735/8726/1737/products/fashion_products_22_1_35bfb1ff-ba53-4183-8165-40ad7779a8a7.jpg?v=1680169369&width=600"
            alt=""
          />
          <img
            className="hover-img"
            src="https://cdn.shopify.com/s/files/1/0735/8726/1737/products/fashion_products_22_2_c238fe43-81a4-447f-a039-c1257bce442a.jpg?v=1680169369&width=600"
            alt=""
          />
        </div>

        <div className="flex flex-col">
          <span>Title</span>
          <span>favori</span>
          <span>$Fiyat</span>
        </div>
      </div>
      <div className="product-container">
        <div className="image-container">
          <img
            className="normal-img"
            src="https://cdn.shopify.com/s/files/1/0735/8726/1737/products/fashion_products_22_1_35bfb1ff-ba53-4183-8165-40ad7779a8a7.jpg?v=1680169369&width=600"
            alt=""
          />
          <img
            className="hover-img"
            src="https://cdn.shopify.com/s/files/1/0735/8726/1737/products/fashion_products_22_2_c238fe43-81a4-447f-a039-c1257bce442a.jpg?v=1680169369&width=600"
            alt=""
          />
        </div>

        <div className="flex flex-col">
          <span>Title</span>
          <span>favori</span>
          <span>$Fiyat</span>
        </div>
      </div>  
    </div>
  );
}

export default Product;
