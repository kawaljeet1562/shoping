import React, { useContext, useEffect, useState } from "react";
import { CartCtx } from "./CartContext";

import SingleProduct from "./SingleProduct";

const Cartpage = (prod) => {
  const [total, setTotal] = useState();

  const { cart } = useContext(CartCtx);

  useEffect(() => {
    const totalprice = cart.reduce((acc, curr) => acc + Number(curr.price), 0);
    setTotal(totalprice);
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Totle: {total}</span>
      <div className="product-container">
        {cart.map((product, index) => {
          return <SingleProduct prod={product} key={index.toString()} />;
        })}
      </div>
    </div>
  );
};

export default Cartpage;
