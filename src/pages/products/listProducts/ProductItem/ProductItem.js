import React from "react";
import "./ProductItem.css";

const ProductItem = (props) => {
  const { price, name, image } = props;

  return (
    <>
      <div className="card" data-item="+">
        <div className="imgBx">
          <img src={image}alt="" />

          <ul className="action">
            <li>
              <i className="fa fa-heart" aria-hidden="true"></i>
              <span>Add to Wishlist</span>
            </li>
            <li>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <span>Add to Cart</span>
            </li>
            <li>
              <i className="fa fa-eye" aria-hidden="true"></i>
              <span>Add to Details</span>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="productName">
            <h3>{name}</h3>
          </div>
          <div className="price_rating">
            <h2>${price}</h2>
            <div className="rating">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa grey fa-star" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
