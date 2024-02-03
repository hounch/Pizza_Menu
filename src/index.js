import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import pizzaData from "./data";
import Menu from "./Menu";
import Footer from "./Footer";

console.log(pizzaData, "DATA");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  </React.StrictMode>
);
