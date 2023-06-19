import React, { useState } from "react";
// import faker from "faker";
import SingleProduct from "./SingleProduct";
import "./Styles.css";
import { useContext } from "react";
import { CartCtx } from "./CartContext";

const Home = () => {
  const { items } = useContext(CartCtx);

  const cb = (prod) => <SingleProduct prod={prod} key={prod?.id} />;

  return <div className="product-container">{items.map(cb)}</div>;
};

export default Home;
