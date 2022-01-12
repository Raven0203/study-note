import { Divider } from "@mui/material";
import React from "react";
import "./journeyhome.css";

export default function JourneyHome() {
  return (
    <div className="journey-box">
       <h1 className="journey-home-title">行程規劃</h1>
      <div className="journey-home-title-box">
       
        <Divider textAlign="center">GO</Divider>
      </div>
      <button>開始</button>
      <div className="journey-card">
        <a href="www.google.com.tw">1</a>
        <button>Click</button>
      </div>
    </div>
  );
}
