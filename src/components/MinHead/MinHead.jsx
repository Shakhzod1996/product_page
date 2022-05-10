import React from "react";
import LeftMin from "./LeftMin";
import './MinHead.css'
import RightMin from "./RightMin";

export default function MinHead() {
  return (
    <div className="minhead">
      <div className="container">
        <div className="minhead-inside">
          <LeftMin />
          <RightMin />
        </div>
      </div>
    </div>
  );
}
