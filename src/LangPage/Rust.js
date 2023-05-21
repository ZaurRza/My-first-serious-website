import "../scss/App.scss";
import "../scss/Media.scss";
import "../scss/Carousel.scss";
import "../scss/Articles.scss";
import React, { useState, useEffect } from "react";

import { Shablon } from "../Pages/Shablon.js";
import { Carous } from "../Pages/Carousel.js";
import { PatternLang } from "./PatternLang";
export function Rust() {
  const [testnews, settestnews] = useState([
    {
      author: "Zaur Rzaev",
      title: "Первый день без преступлений с применением насилия",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8mJiYAAAAUFBQjIyMzMzPn5+fr6+utra22trZwcHCOjo4cHBwPDw8ZGRn39/fY2NiWlpZ/f39DQ0MrKysJCQmhoaHx8fG0tLRra2vg4OC8vLyVlZV+fn52dnZtB+3aAAABb0lEQVR4nO3aXU/CMBiAUdgGfjFQBEFF///P1ISwdckaViDRwjmXXd+yJ9wwYDQCAAAAAAAAAAAAAAAAAAAAAAAAgL37okxSbA+T09TJ98PkXeJk/MinIYX1OMn6oS1Mm5w/toVpk1Hl/yqcKUynUGEvhXEKT6Dw1gurULs8oDAyeU5h/4nnFVavgUl77PHC2OSAwroIRI+8UGERbnopEwo7k2/t5PHCervY/Npv+gg2dY5czi9UuDi5cNM/ebxw/RlMPitUqFChQoUKFSpUqFChQoUKFSpUqFBh9oXh8UnfCOdSWK0Cwfr1FMZ+RrmiwgiFChUqVKhQ4R8WrqtencJd3a4n/tukFf6DNvKa3cLgQnjHX2WzPqywmvQqO+/huFmvmruIfi7tP3Cy+m4K5/07qk7hrL1Qh3e8XDXr492AwtMNerbI2qDnw6wpzJ/C/CnMn8L8KczftIi4mkIAAAAAAAAAAAAAAAAAAABuxQ+a2VKQTE1ZPQAAAABJRU5ErkJggg==",
      views: "4637",
      id: "1",
      lang: "Rust",
    },
    {
      author: "Amir Rzaev",
      title: "Изображения могут быть защищены авторским правом. ",
      img: "https://i.stack.imgur.com/hvbyk.png",
      views: "78376",
      lang: "Rust",
    },
    {
      author: "Zaur Rzaev",
      title: "Первый день без преступлений с применением насилия",
      img: "https://i.stack.imgur.com/N0Ir3.png",
      views: "4637",
      lang: "Rust",
    },
    {
      author: "Amir Rzaev",
      title: "Изображения могут быть защищены авторским правом. ",
      img: "https://habrastorage.org/getpro/habr/post_images/d07/5e5/26f/d075e526f5dce59eb0525915256cdea5.gif",
      views: "78376",
      lang: "Rust",
    },
    {
      author: "Zaur Rzaev",
      title: "Первый день без преступлений с применением насилия",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Q9GdazTp2wL5ACRSlHfg2FCNpAFV5hbO0g&usqp=CAU",
      views: "4637",
      lang: "Rust",
    },
  ]);
  function Add(values) {
    settestnews([values, ...testnews]);
  }

  return (
    <div className="back">
      <div>
        <Shablon namelg="Rust" />
      </div>
      <div className="Home">
        <div className="boxshad"></div>
        <Carous />
        <PatternLang data={testnews} />
      </div>
    </div>
  );
}
