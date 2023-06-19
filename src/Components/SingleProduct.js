import React, { useContext } from "react";
import { CartCtx } from "./CartContext";

const SingleProduct = ({ prod }) => {
  const { cart, setCart, addToCart, removeFromCart, items } =
    useContext(CartCtx);
  console.log("prodfff ", prod, cart);

  const isProductAdded = cart.includes(prod);
  const onButtonClick = () => {
    isProductAdded ? removeFromCart(prod) : addToCart(prod);
  };

  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} className="img" />
      <div className="productdesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>${prod?.price}</span>
      </div>
      <button className="add" onClick={onButtonClick}>
        {isProductAdded ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default SingleProduct;
