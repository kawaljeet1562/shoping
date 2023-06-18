import React, { useContext } from "react";
import { CartCtx } from "./CartContext";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(CartCtx);
  console.log("prod ", prod);

  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} className="img" />

      <div className="productdesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>${prod?.price}</span>
      </div>
      {console.log("image is", prod.image)}
      {cart.includes(prod) ? (
        <button
          className="add"
          onClick={() => {
            //find index of item, then filter the item from array,
            // that all items should return except that index which you want to remove
            console.log("cartcheck", [cart.filter((c) => c?.id !== prod?.id)]);
            setCart(cart.filter((c) => c?.id !== prod?.id));
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...  cart, prod]);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
