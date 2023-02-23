import React from "react";
import PropTypes from "prop-types";
import "./Item.css";
const Item = ({ title, amount }) => {
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={status}>
        {title}
        <span>
          {symbol}
          {Math.abs(amount)}
        </span>
      </li>
    </div>
  );
};

Item.prototype = {
  title: PropTypes.string,
  amount: PropTypes.number,
};

export default Item;
