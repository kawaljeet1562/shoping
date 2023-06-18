import React from "react";
import { createContext, useState } from "react";
export const CartCtx = createContext(null);

const Items = [
  {
    id: "i1",
    name: "mobile-phone",
    price: 112.86,
    image: "./images/iPhone+14.png",
  },
  {
    id: "i2",
    name: "cat",
    price: 23.46,
    image: "./images/cat.jpeg",
  },
  {
    id: "i3",
    name: "bag",
    price: 17.46,
    image: "./images/bag.webp",
  },
  {
    id: "i4",
    name: "Shoes",
    price: 23.46,
    image: "./images/shoes.jpeg",
  },
  {
    id: "i5",
    name: "speakers",
    price: 32.87,
    image: "./images/speakers.jpeg",
  },
  {
    id: "i6",
    name: "Toy",
    price: 23.46,
    image: "./images/toy.jpeg",
  },
  {
    id: "i7",
    name: "t-shirt",
    price: 23.46,
    image: "./images/tpy2.jpeg",
  },
  {
    id: "i8",
    name: "t-shirt",
    price: 23.46,
    image: "./images/toy3.jpeg",
  },
  {
    id: "i9",
    name: "t-shirt",
    price: 23.46,
    image: "./images/toy.jpeg",
  },
  {
    id: "i10",
    name: "t-shirt",
    price: 23.46,
    image: "./images/iPhone+14.png",
  },
  {
    id: "i11",
    name: "t-shirt",
    price: 23.46,
    image: "./images/bag.webp",
  },
  {
    id: "i12",
    name: "t-shirt",
    price: 23.46,
    image: "./images/tpy2.jpeg",
  },
];
const CartContext = ({ children }) => {
  const [cart, setCart] = useState(Items);

  return (
    <CartCtx.Provider value={{ cart, setCart }}>{children}</CartCtx.Provider>
  );
};

export default CartContext;
