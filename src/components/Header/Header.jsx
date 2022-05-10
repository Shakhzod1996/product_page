import React from "react";
import "./Header.css";
import RightHeader from "./RightHeader";

export default function Header() {
  let arr = [
    {
      id: 1,
      img: "bx bx-checkbox-minus",
      desc: "Orders",
    },

    {
      id: 2,
      img: "bx bx-shopping-bag",
      desc: "Card",
    },

    {
      id: 3,
      img: "bx bx-user",
      desc: "Profile",
    },
  ];
  return (
    <div className="header">
      <div className="container">
        <div className="header-inside-flex">
          <div className="logo-flex">
            <h4>ePallet</h4>
            <div className="search-flex">
              <i className="bx bx-search"></i>
              <input type="seach" placeholder="Type to Seach" />
              <p>All Categories</p>
            </div>
          </div>
          <div className="righ-head-div">
          {arr.map((item) => (
            <RightHeader img={item.img} desc={item.desc} key={item.id} />
          ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
