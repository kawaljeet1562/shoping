import React, { useState } from "react";
// import faker from "faker";
import SingleProduct from "./SingleProduct";
import "./Styles.css";
import { useContext } from "react";
import { CartCtx } from "./CartContext";

const Home = () => {
  const { cart, setCart } = useContext(CartCtx);
  // const ProductArray = [...Array(20)].map((parsedJson) => ({
  //   id: parsedJson?.id,
  //   title: parsedJson?.title,
  //   price: parsedJson?.price,
  //   image: parsedJson?.image,
  // }));
  const ProductArray = [...cart].map((product) => ({
    key: product.id,
    image: product?.image,
    name: product.name,
    price: product.price,
  }));

  console.log();

  const [products] = useState(ProductArray);
  const cb = (prod) => {
    console.log("prod is", prod);
    return <SingleProduct prod={prod} key={prod?.id} />;
  };

  return <div className="product-container">{products.map(cb)}</div>;
};

export default Home;
