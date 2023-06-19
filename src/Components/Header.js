import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartCtx } from "./CartContext";
import "./Styles.css";
const Header = () => {
  const { cart } = useContext(CartCtx);
  return (
    <div>
      <span className="header">Context API</span>
      <ul className="nav">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/Cart ">Cart({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
