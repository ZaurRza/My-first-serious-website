import "../scss/App.scss";
import "../scss/ArticleStyle.scss";
import "../scss/Media.scss";
import React, { Component, useRef, useState } from "react";
import { Shablon } from "./Shablon";

import { Editorcont } from "./CreateArticleLogic";
import { historyField } from "@codemirror/commands";
import { DragDrop } from "./CreateArticleLogic";
// When custom fields should be serialized, you can pass them in as an object mapping property names to fields.
// See [toJSON](https://codemirror.net/docs/ref/#state.EditorState.toJSON) documentation for more details
const stateFields = { history: historyField };

export function Create() {
  const txt = useRef();
  const [fullImage, setfullImage] = useState(false);
  const [changepage, setchangepage] = useState("article");
  const [image, setimage] = useState("");
  function ImageHandler(e) {
    const img = e.target.files[0];
    const reader = new FileReader();
    if (img) {
      reader.onloadend = () => {
        setimage(reader.result);
        console.log(image);
      };
      reader.readAsDataURL(img);
    } else {
      console.log(img);
    }
  }
  const handleDelAnim = () => {
    const wrapper = document.getElementById("ModalImage");
    wrapper.classList.value = "";
    wrapper.classList.toggle("modalImageDelAnim");
    console.log(wrapper.classList.value);
    setTimeout(() => {
      setfullImage(false);
    }, 500);
  };
  const handleStartAnim = () => {
    const wrapper = document.getElementById("ModalImage");
    wrapper.classList.value = "";
    wrapper.classList.toggle("modalImageStartAnim");
    console.log(wrapper.classList.value);
    setfullImage(true);
  };

  return (
    <div className="back">
      <Shablon />
      <div>
        <div id="DivModal" className={fullImage ? "modal" : "hidemodal"}>
          <img
            style={{
              width: "80%",
              position: "fixed",
              transition: "300ms",
              zIndex: 1000,
            }}
            onClick={handleDelAnim}
            src={image}
            id="ModalImage"
          ></img>
        </div>
        <div className="articleim">
          <img
            className="inarticleimg"
            onClick={handleStartAnim}
            src={image}
          ></img>
        </div>
      </div>
      <div className="formarticle">
        <div className="articlesource">
          <span
            className="another"
            style={{ display: "none" }}
            onClick={() => setchangepage("files")}
          >
            файлы
          </span>

          <div className={image === "" ? "norm" : "down"}>
            <span className="anotherImg">
              <input
                onChange={(e) => {
                  ImageHandler(e);
                }}
                className="imginput"
                type="file"
                aria-placeholder="+img"
              ></input>
              <label className="addimagelabel">превью</label>
            </span>
            <span className="another" onClick={() => setchangepage("article")}>
              статья
            </span>
            <div
              style={{ marginTop: 10 }}
              className={
                changepage === "article" ? "showarticle" : "hidearticle"
              }
            >
              <Editorcont />
            </div>
          </div>
          <div className={changepage === "files" ? "showfiles" : "hidefiles"}>
            <DragDrop />
          </div>
        </div>
      </div>
    </div>
  );
}
