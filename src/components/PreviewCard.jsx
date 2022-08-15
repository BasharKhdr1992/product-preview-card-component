import React from "react";
import "./PreviewCard.css";
import Button from "./Button";
import cart from "../images/icon-cart.svg";

const PreviewCard = ({
  productImage,
  title,
  category,
  desc,
  originalPrice,
  isOnSale,
  onSalePrice,
}) => {
  return (
    <div className="preview-card">
      <div className="img-container">
        <img src={productImage} alt={title} title={title} />
      </div>
      <div className="product-info">
        <p className="category">{category}</p>
        <h1 className="title">{title}</h1>
        <p className="desc">{desc}</p>
        <div className="price">
          <p className="original-price">{originalPrice}</p>
          {onSalePrice && <p className="on-sale-price">{onSalePrice}</p>}
        </div>
        <Button>
          <img src={cart} alt="cart" />
          <span className="btn-title">Add to Cart</span>
        </Button>
      </div>
    </div>
  );
};

export default PreviewCard;
