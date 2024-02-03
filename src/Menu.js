import React from "react";
import pizzaData from "./data";

const Menu = () => {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Menu</h2>
      <>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
        {/* <Pizza pizzaObj={pizza} key={pizza.name} /> */}
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      </>
    </main>
  );
};

export const Pizza = ({ pizzaObj }) => {
  console.log(pizzaObj);
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="pizza" />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "Sold Out" : `$${pizzaObj.price}`}</span>
    </li>
  );
};

export default Menu;
