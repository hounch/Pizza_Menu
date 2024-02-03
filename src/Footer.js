import React from "react";

const Footer = () => {
  const date = new Date();
  const openingHour = 12;
  const closingHour = 22;
  const isOpen =
    date.getHours() >= openingHour && date.getHours() < closingHour;
  console.log(isOpen);
  return (
    <div className="footer">
      {isOpen ? (
        <WorkingHours openingHour={openingHour} closingHour={closingHour} />
      ) : (
        <>
          <p>
            We'll glad to see you from {openingHour}:00 to {closingHour}:00
          </p>
          <button className="btn">Buy online</button>
        </>
      )}
    </div>
  );
};

const WorkingHours = ({ openingHour, closingHour }) => {
  return (
    <div className="order">
      <p>
        We're open. Hope to see you from {openingHour}:00 to {closingHour}:00
      </p>
      <button className="btn">Order pizza</button>
    </div>
  );
};

export default Footer;
