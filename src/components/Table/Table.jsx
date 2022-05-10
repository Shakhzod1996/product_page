import React from "react";
import LeftTable from "./LeftTable";
import RightTable from "./RightTable";
import "./Table.css";

export default function Table() {
  return (
    <div className="table">
      <div className="container">
        <div className="table-inside">
          <div className="table-header">
            <ul className="table-ul">
              <li>Overview</li>
              <li className="active">Overview</li>
              <li>Palette/Case Configuration</li>
              <li>Shipping/Storage</li>
              <li>Docs/Certs</li>
            </ul>
          </div>

          <div className="table-main-grid">
            <LeftTable />
            <RightTable />
          </div>
        </div>

        <div className="per-div">
        <p className="percent">
          Percent Daily Vslues Are Base on a 2,000 calories diet
        </p>

        <h5 className="lor20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, hic
          dolore tenetur amet libero corporis nostrum vero eos maxime similique.
          </h5>
          
          <hr className="last-hr" />
        </div>
  
      </div>
    </div>
  );
}
