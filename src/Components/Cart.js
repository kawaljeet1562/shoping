import React, { useContext, useEffect, useState } from "react";
import { CartCtx } from "./CartContext";

import SingleProduct from "./SingleProduct";

const Cartpage = (prod) => {
  const [total, setTotal] = useState();

  const { cart, setCart } = useContext(CartCtx);

  // const getUsers = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  //   setCart(await response.json());
  // };

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log("res", res);
    //   setCart(res);
    // });

    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));

    // getUsers();
    // const result = await response.json()
    // console.log(result)
    // .then((response) => response.json())
    // .then((json) => {
    //   console.log(json);
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //   setCart(json);
    // });
  }, [cart]);
  console.log("cart", cart);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Totle: {total}</span>
      <div className="product-container">
        {cart.map((prod, i) => {
          return <SingleProduct prod={prod} key={prod?.id} />;
        })}
      </div>
    </div>
  );
};

export default Cartpage;
