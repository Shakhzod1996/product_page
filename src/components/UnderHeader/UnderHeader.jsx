import React from "react";
import "./UnderHeader.css";
import UnderHeadItem from "./UnderHeadItem";

export default function UnderHeader() {
  let arr = [
    "Food Services",
    "Health & Beauty",
    "Industrial Ingredients",
    "Beverages",
    'Pet Supplies', 
    'Frozen',
    'Cleaning Products'
  ];
  return (
    <div className="under-header">
      <div className="container">
        <div className="underhead-inside">
          <ul className="ul">
            {arr.map((item, index) => (
            <UnderHeadItem item={item} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
