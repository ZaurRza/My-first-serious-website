import "../scss/App.scss";
import "../scss/Media.scss";
import "../scss/Carousel.scss";
import "../scss/ArticlePage.scss";
import img from "../test.png";
import { historyField } from "@codemirror/commands";
import { bespin } from "@uiw/codemirror-theme-bespin";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { java, javaLanguage } from "@codemirror/lang-java";
import { css, cssLanguage } from "@codemirror/lang-css";
import { php, phpLanguage } from "@codemirror/lang-php";
import React, { useState, useEffect } from "react";
import parse, { Element } from "html-react-parser";
import { Shablon } from "../Pages/Shablon.js";
export function OnePage() {
  const stateFields = { history: historyField };
  const [fullImage, setfullImage] = useState(false);
  const [article, setarticle] = useState([
    {
      text: "Nowadays, celebrities salary reach enormous amount of money and this tendency still increases. At the same time, in some countries,teacher's and doctor's salary still low in compare 10 years ago. I have 2 reasons of this. Firstly, people like to watch celebrities performance, like movies or serials. It brings a lot of benefits for the company and movie. All-stars are paid a huge salary by companies, because celebrities gather wide crowd. Instead of teachers, who might be forgotten after graduation. They don't bring abundance amount of money. Secondly, celebrities might take part in advertisement. That gives them a lot of extra money, because companies want to draw attention celebrity's fans. Teachers or doctors in the most of cases can't do that, because nobody cares about them. Overall, people need to respect all jobs, because salary doesn't always represent significance of jobs.",
      lang: "1C",
      img: img,
    },
  ]);
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
  function getCode(text) {
    const splits = text.split("<code>", 9999999);
    let midsplit = text.split("</p>", 999999);
    let splitted = midsplit.join(" ");
    const newsplit = splitted.split("</code>", 999999);
    const repl = splits.map((item) => {
      let replace = item.replace(/(<p>)/g, "");
      replace = replace.replace(/;/g, "");
      replace = replace.replace(/(<br>)/g, "\n");
      replace = replace.replace(/(<em>)/g, "");
      replace = replace.replace(/(<strong>)/g, "");
      replace = replace.replace(/&gt/g, ">");
      replace = replace.replace(/&lt/g, "<");
      replace = replace.replace(/&quot/g, '"');
      replace = replace.replace(/&amp/g, "&");
      replace = replace.replace(/&#x60/g, "`");
      return replace;
    });
    const secsplits = repl.map((item) => {
      const replace = item.replace("<br/>", "");
      const returnsplit = replace.split("</code>", 1);
      return returnsplit;
    });
    const shifted = secsplits.shift();
    for (let i = 0; i !== newsplit.length; i++) {
      if ("<p><code>" !== newsplit[i].trim().substr(0, 9)) {
        console.log(newsplit[i].split("<code>", 99999));

        var Mirror = (
          <CodeMirror
            readOnly={true}
            theme={bespin}
            editable={false}
            value={JSON.parse(JSON.stringify(secsplits.join("\n ")))}
            height="300px"
            width="100%"
            className="codemirror"
            extensions={[
              javascript({ jsx: true, typescript: true }),
              java(javaLanguage),
              css(cssLanguage),
              php({ baseLanguage: phpLanguage, plain: true }),
            ]}
            onChange={(value, viewUpdate) => {
              localStorage.setItem("myValue", value);

              const state = viewUpdate.state.toJSON(stateFields);
              localStorage.setItem("myEditorState", JSON.stringify(state));
              console.log(JSON.parse(JSON.stringify(localStorage.myValue)));
            }}
          />
        );
        for (i = 0; i !== newsplit.length; i++) {
          return Mirror;
        }
      } else {
      }
    }
  }
  function GetHtmlShift(text) {
    const splits = text.split("<code>", 999999);

    const shifted = splits.shift();

    return shifted;
  }
  function GetHtmlPop(text) {
    let splits = text.split("<code>", 9999999999);
    splits = text.split("</code>");
    const poped = splits.pop();

    return poped;
  }
  return (
    <div className="back">
      {article.map((item) => {
        return (
          <>
            <div>
              <Shablon namelg={item.lang} />
            </div>
            <div className="Home">
              <div className="boxshad"></div>
              <div className="boxarticle">
                <div>
                  <div
                    id="DivModal"
                    className={fullImage ? "modal" : "hidemodal"}
                  >
                    <img
                      style={{
                        width: "80%",
                        position: "fixed",
                        transition: "300ms",
                        zIndex: 1000,
                      }}
                      onClick={handleDelAnim}
                      src={item.img}
                      id="ModalImage"
                    ></img>
                  </div>
                  <div className="articleimgbox">
                    <img
                      className="imgarticle"
                      onClick={handleStartAnim}
                      src={item.img}
                    ></img>
                  </div>
                </div>
                <div className="boxtext">
                  <text style={{ width: "100%" }}>
                    {parse(GetHtmlShift(item.text))}
                    {getCode(item.text)}
                    {parse(GetHtmlPop(item.text))}
                  </text>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
