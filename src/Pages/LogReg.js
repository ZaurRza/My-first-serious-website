import "../scss/App.scss";
import "../scss/Media.scss";
import "../scss/RegLog.scss";
import React, { useState, useEffect } from "react";
import Logicon from "./Log.png";
import { Login, Register } from "./LogPageLogic.js";
import { BiArrowBack } from "react-icons/bi";

export function LogReg() {
  return (
    <div className="back">
      <div className="Home">
        <a href="/">
          <BiArrowBack
            style={{
              position: "absolute",
              width: 50,
              height: 50,
              marginTop: "-100px",
              marginLeft: "40px",
              cursor: "pointer",
              color: "black",
            }}
          ></BiArrowBack>
        </a>
        <div className="boxshad"></div>
        <img src={Logicon} className="Logicon"></img>
        <div className="LogRegdiv">
          <div>
            <Login />
          </div>
          <div>
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
}
