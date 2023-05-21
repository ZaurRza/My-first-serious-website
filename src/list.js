import "./scss/App.scss";
import "./scss/Media.scss";
import React, { useState } from "react";

export function List() {
  const lang1 = [
    {
      lang: "Java",
      langpage: "/",
    },
    {
      lang: "JavaScript",
      langpage: "/JS",
    },
    {
      lang: "Python",
      langpage: "/Python",
    },
    {
      lang: "C#",
      langpage: "/Csharp",
    },
    {
      lang: "C",
      langpage: "/C",
    },
    {
      lang: "C++",
      langpage: "/C++",
    },
    {
      lang: "PHP",
      langpage: "/PHP",
    },
    {
      lang: "R",
      langpage: "/R",
    },
    {
      lang: "TypeScript",
      langpage: "/TS",
    },
    {
      lang: "Switch",
      langpage: "/Switch",
    },
    {
      lang: "Objective-C",
      langpage: "/ObC",
    },
    {
      lang: "Go",
      langpage: "/Go",
    },

    {
      lang: "Rust",
      langpage: "/Rust",
    },
    {
      lang: "Assembler",
      langpage: "/Assembler",
    },
    {
      lang: "Delpi",
      langpage: "/Delpi",
    },
    {
      lang: "Haskell",
      langpage: "/Haskell",
    },
  ];
  const lang2 = [
    {
      lang: "Kotlin",
      langpage: "/Kotlin",
    },
    {
      lang: "Matlab",
      langpage: "/Matlab",
    },
    {
      lang: "Ruby",
      langpage: "/Ruby",
    },

    {
      lang: "ASM",
      langpage: "/ASM",
    },
    {
      lang: "Dart",
      langpage: "/Dart",
    },
    {
      lang: "Scala",
      langpage: "/Scala",
    },

    {
      lang: "1C",
      langpage: "/1C",
    },
    {
      lang: "Salesforce Apex",
      langpage: "/SA",
    },

    {
      lang: "Groovy",
      langpage: "/",
    },

    {
      lang: "Clojure",
      langpage: "/Clojure",
    },

    {
      lang: "Elixir",
      langpage: "/Elixir",
    },
    {
      lang: "ABAP",
      langpage: "/ABAP",
    },
    {
      lang: "Erlang",
      langpage: "/Erlang",
    },
    {
      lang: "Pascal",
      langpage: "/Pascal",
    },

    {
      lang: "Perl",
      langpage: "/Perl",
    },
    {
      lang: "Lua",
      langpage: "/Lua",
    },
  ];
  return (
    <>
      <p style={{ fontWeight: 600 }}>Языки</p>
      {lang1.map((item) => {
        return (
          <>
            <div>
              <a className="language" href={item.langpage}>
                {item.lang}
              </a>
            </div>
          </>
        );
      })}
      {lang2.map((item) => {
        return (
          <>
            <div className="languagediv">
              <a className="language2" href={item.langpage}>
                {item.lang}
              </a>
            </div>
          </>
        );
      })}
    </>
  );
}
