import "../scss/App.scss";
import "../scss/Media.scss";
import "../scss/Shablon.scss";
import React, { useState, useEffect } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { BiArrowBack } from "react-icons/bi";
import { AiFillLock, AiTwotonePropertySafety } from "react-icons/ai";
import Avatar from "@mui/material/Avatar";
import { List } from "../list";
import axios from "axios";
import { FcLike } from "react-icons/fc";
import { BsFillPeopleFill, BsFillBriefcaseFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { MdArticle } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";

import { Link } from "react-router-dom";
import lockimg from "./lockimg.png";
function History(props) {
  return (
    <>
      <div className="historyarticles">
        {props.data.map((item) => {
          props.data.sort((item1, item2) => {
            return item1.id - item2.id;
          });
          props.data.reverse();
          return (
            <Link
              key={item.id}
              style={{ textDecoration: "none", color: "black" }}
              to={`/${props.lang}/article/id/${item.id}}`}
            >
              <div className="historydivarticles">
                <div className="historyarticlesitem">
                  <img className="historyarticlesimg" src={item.img}></img>
                </div>
                <text>
                  {item.title}

                  <br className={item.title.length >= 31 ? "hide" : "a"} />
                </text>
                <text>
                  <FcLike></FcLike>
                  {"   " + item.views}
                </text>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
export function ShablonLogic(props) {
  return (
    <>
      <div className="margin">
        <History data={props.data} />
      </div>
    </>
  );
}
export function Stat(props) {
  return (
    <div className="statistic">
      <text>
        <BsFillPeopleFill></BsFillPeopleFill> Подписчики
      </text>
      <br />
      <text>0</text>
      <br />
      <text>
        <FcLike></FcLike> Лайки
      </text>
      <br />
      <text>0</text>
      <br />
      <text>
        <MdArticle></MdArticle> Статьи
      </text>
      <br />
      <text>0</text>
      <br />
      <text>
        <BsFillBriefcaseFill></BsFillBriefcaseFill> Проекты
      </text>
      <br />
      <text>0</text>
    </div>
  );
}
