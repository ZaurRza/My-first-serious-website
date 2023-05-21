import "../scss/App.scss";
import "../scss/Media.scss";
import "../scss/Carousel.scss";
import "../scss/Articles.scss";
import React, { useState, useEffect } from "react";
import { Shablon } from "../Pages/Shablon.js";
import { Carous } from "../Pages/Carousel.js";
import { PatternLang } from "./PatternLang";
import { AutoSizer, List } from "react-virtualized";
import "react-virtualized/styles.css";
import axios from "axios";
export function C1() {
  const [articles, setarticles] = useState([]);
  const urlAccount = "";
  useEffect(() => {
    axios.get(urlAccount).then((data) => {
      console.log(data.data);
    });
  }, []);
  useEffect(() => {
    const dummyData = [];

    dummyData.push(
      {
        author: "Zaur Rzaev",
        title: "Первый день без пименением насилия",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8mJiYAAAAUFBQjIyMzMzPn5+fr6+utra22trZwcHCOjo4cHBwPDw8ZGRn39/fY2NiWlpZ/f39DQ0MrKysJCQmhoaHx8fG0tLRra2vg4OC8vLyVlZV+fn52dnZtB+3aAAABb0lEQVR4nO3aXU/CMBiAUdgGfjFQBEFF///P1ISwdckaViDRwjmXXd+yJ9wwYDQCAAAAAAAAAAAAAAAAAAAAAAAAgL37okxSbA+T09TJ98PkXeJk/MinIYX1OMn6oS1Mm5w/toVpk1Hl/yqcKUynUGEvhXEKT6Dw1gurULs8oDAyeU5h/4nnFVavgUl77PHC2OSAwroIRI+8UGERbnopEwo7k2/t5PHCervY/Npv+gg2dY5czi9UuDi5cNM/ebxw/RlMPitUqFChQoUKFSpUqFChQoUKFSpUqFBh9oXh8UnfCOdSWK0Cwfr1FMZ+RrmiwgiFChUqVKhQ4R8WrqtencJd3a4n/tukFf6DNvKa3cLgQnjHX2WzPqywmvQqO+/huFmvmruIfi7tP3Cy+m4K5/07qk7hrL1Qh3e8XDXr492AwtMNerbI2qDnw6wpzJ/C/CnMn8L8KczftIi4mkIAAAAAAAAAAAAAAAAAAABuxQ+a2VKQTE1ZPQAAAABJRU5ErkJggg==",
        views: "4637",
        id: 1,
        lang: "1C",
      },
      {
        author: "Zaur Rzaev",
        title: "Первый день без пименением насилия",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8mJiYAAAAUFBQjIyMzMzPn5+fr6+utra22trZwcHCOjo4cHBwPDw8ZGRn39/fY2NiWlpZ/f39DQ0MrKysJCQmhoaHx8fG0tLRra2vg4OC8vLyVlZV+fn52dnZtB+3aAAABb0lEQVR4nO3aXU/CMBiAUdgGfjFQBEFF///P1ISwdckaViDRwjmXXd+yJ9wwYDQCAAAAAAAAAAAAAAAAAAAAAAAAgL37okxSbA+T09TJ98PkXeJk/MinIYX1OMn6oS1Mm5w/toVpk1Hl/yqcKUynUGEvhXEKT6Dw1gurULs8oDAyeU5h/4nnFVavgUl77PHC2OSAwroIRI+8UGERbnopEwo7k2/t5PHCervY/Npv+gg2dY5czi9UuDi5cNM/ebxw/RlMPitUqFChQoUKFSpUqFChQoUKFSpUqFBh9oXh8UnfCOdSWK0Cwfr1FMZ+RrmiwgiFChUqVKhQ4R8WrqtencJd3a4n/tukFf6DNvKa3cLgQnjHX2WzPqywmvQqO+/huFmvmruIfi7tP3Cy+m4K5/07qk7hrL1Qh3e8XDXr492AwtMNerbI2qDnw6wpzJ/C/CnMn8L8KczftIi4mkIAAAAAAAAAAAAAAAAAAABuxQ+a2VKQTE1ZPQAAAABJRU5ErkJggg==",
        views: "4637",
        id: 1,
        lang: "1C",
      },
      {
        author: "Zaur Rzaev",
        title: "Первый день без пименением насилия",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8mJiYAAAAUFBQjIyMzMzPn5+fr6+utra22trZwcHCOjo4cHBwPDw8ZGRn39/fY2NiWlpZ/f39DQ0MrKysJCQmhoaHx8fG0tLRra2vg4OC8vLyVlZV+fn52dnZtB+3aAAABb0lEQVR4nO3aXU/CMBiAUdgGfjFQBEFF///P1ISwdckaViDRwjmXXd+yJ9wwYDQCAAAAAAAAAAAAAAAAAAAAAAAAgL37okxSbA+T09TJ98PkXeJk/MinIYX1OMn6oS1Mm5w/toVpk1Hl/yqcKUynUGEvhXEKT6Dw1gurULs8oDAyeU5h/4nnFVavgUl77PHC2OSAwroIRI+8UGERbnopEwo7k2/t5PHCervY/Npv+gg2dY5czi9UuDi5cNM/ebxw/RlMPitUqFChQoUKFSpUqFChQoUKFSpUqFBh9oXh8UnfCOdSWK0Cwfr1FMZ+RrmiwgiFChUqVKhQ4R8WrqtencJd3a4n/tukFf6DNvKa3cLgQnjHX2WzPqywmvQqO+/huFmvmruIfi7tP3Cy+m4K5/07qk7hrL1Qh3e8XDXr492AwtMNerbI2qDnw6wpzJ/C/CnMn8L8KczftIi4mkIAAAAAAAAAAAAAAAAAAABuxQ+a2VKQTE1ZPQAAAABJRU5ErkJggg==",
        views: "4637",
        id: 1,
        lang: "1C",
      }
    );
    setarticles(dummyData);
  }, []);

  return (
    <div className="back">
      <div>
        <Shablon namelg="1C" />
      </div>
      <div className="Home">
        <div className="boxshad"></div>
        <Carous />
        <div style={{ width: "100%", height: "100vh" }}>
          <AutoSizer>
            {({ width, height }) => {
              return (
                <div className="App">
                  <List
                    width={width}
                    height={height}
                    rowHeight={280}
                    rowCount={articles.length}
                    rowRenderer={({ key, style }) => {
                      return (
                        <div key={key} style={style}>
                          <PatternLang data={articles} />
                        </div>
                      );
                    }}
                  />
                </div>
              );
            }}
          </AutoSizer>
        </div>
      </div>
    </div>
  );
}
