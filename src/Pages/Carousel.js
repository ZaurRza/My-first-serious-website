import "../scss/App.scss";
import "../scss/Media.scss";
import "../scss/Carousel.scss";
import React, { useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export function Carous() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1225 },
      items: 3,
    },

    tablet: {
      breakpoint: { max: 1555, min: 750 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="divcarousel">
      <Carousel
        className="carousel"
        autoPlay={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        arrows={false}
        itemClass="carousel-item-margin-40-px"
      >
        <div className="divitems">
          <img
            className="carouselitems"
            alt="h"
            src="https://cdn.discordapp.com/attachments/984931219877797898/1062456941378543706/kod_programmirovanie_it_152538_1920x1080.png"
          ></img>
          <br />
          <text className="carouseltitle">
            {" "}
            Изображения могут быть защищены авторским правом.
          </text>
        </div>
        <div className="divitems">
          <img
            alt="h"
            className="carouselitems"
            src="https://cdn.discordapp.com/attachments/984931219877797898/1062456941378543706/kod_programmirovanie_it_152538_1920x1080.png"
          ></img>
          <br />
          <text className="carouseltitle">
            {" "}
            Изображения могут быть защищены авторским правом.
          </text>
        </div>
        <div className="divitems">
          <img
            alt="h"
            className="carouselitems"
            src="https://cdn.discordapp.com/attachments/984931219877797898/1062456997510918205/kod_simvoly_programmirovanie_148512_1920x1080.png"
          ></img>
          <br />
          <text className="carouseltitle">
            {" "}
            Изображения могут быть защищены авторским правом.
          </text>
        </div>
        <div className="divitems">
          <img
            alt="h"
            className="carouselitems"
            src="https://cdn.discordapp.com/attachments/984931219877797898/1062457046441676831/150199145759869221741317.png"
          ></img>
          <br />
          <text className="carouseltitle">
            {" "}
            Навыки кодинга, необходимые крутому Linux-инженеру
          </text>
        </div>
        <div className="divitems">
          <img
            alt="h"
            className="carouselitems"
            src="https://cdn.discordapp.com/attachments/984931219877797898/1062456941378543706/kod_programmirovanie_it_152538_1920x1080.png"
          ></img>
          <br />
          <text className="carouseltitle">
            {" "}
            Изображения могут быть защищены авторским правом.
          </text>
        </div>
      </Carousel>
    </div>
  );
}
