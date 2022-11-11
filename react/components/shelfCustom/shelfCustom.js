import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "vtex.product-context";

const shelfCustom = ({ children }) => {
  const productContext = useContext(ProductContext);
  const { product } = productContext;

  console.log("product", product);

  const productId = product.productId;
  const imageProduct = product.items[0].images[0].imageUrl;
  const nameProduct = product.items[0].nameComplete;
  const listPriceProduct = product.items[0].sellers[0].commertialOffer.ListPrice;
  const bestPriceProduct = product.items[0].sellers[0].commertialOffer.Price;

  return (
    <>
      <div className="shelf__item" key={productId}>
          <div className="shelf__item-image">
            <img src={imageProduct} alt={nameProduct} />
          </div>
          <h2 className="shelf__item-name">{nameProduct}</h2>
          <div className="shelf__item-prices">
            <p className="shelf__item-prices--listPrice">{listPriceProduct}</p>
            <p className="shelf__item-prices--bestPrice">{bestPriceProduct}</p>
          </div>
        <div className="shelf__item-buyButton">{children[0]}</div>
      </div>
    </>
  );
};

export default shelfCustom;
