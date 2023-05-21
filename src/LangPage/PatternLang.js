import "../scss/App.scss";
import "../scss/Media.scss";
import "../scss/Carousel.scss";
import "../scss/Articles.scss";
import React, { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

export function PatternLang(props) {
  const [filter, setfilter] = useState(false);

  return (
    <>
      <div className="articles">
        {filter
          ? props.data.map((item) => {
              props.data.sort((item1, item2) => {
                return item1.views - item2.views;
              });
              props.data.reverse();
              return (
                <Link
                  key={item.id}
                  to={`/${props.lang}/article/id/${item.id}}`}
                >
                  <div className="divarticles">
                    <div className="articlesitem">
                      <img className="articlesimg" src={item.img}></img>
                    </div>
                    <text>
                      {item.title}
                      <br />
                      <br className={item.title.length >= 31 ? "hide" : "a"} />
                    </text>
                    <lu>{item.author}</lu>
                    <text style={{ marginLeft: 80 }}>
                      <FcLike></FcLike>
                      {"   " + item.views}
                    </text>
                  </div>
                </Link>
              );
            })
          : props.data.map((item) => {
              props.data.sort((item1, item2) => {
                return item1.id - item2.id;
              });
              props.data.reverse();
              return (
                <Link
                  key={item.id}
                  to={`/${props.lang}/article/id/${item.id}}`}
                >
                  <div className="divarticles">
                    <div className="articlesitem">
                      <img className="articlesimg" src={item.img}></img>
                    </div>
                    <text>
                      {item.title}
                      <br />
                      <br className={item.title.length >= 31 ? "hide" : "a"} />
                    </text>
                    <lu>{item.author}</lu>
                    <text style={{ marginLeft: 80 }}>
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
