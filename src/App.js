import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cartpage from "./Components/Cart";

import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exect Component={Home} />
          <Route path="/cart" Component={Cartpage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
