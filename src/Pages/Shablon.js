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
import { ShablonLogic, Stat } from "./ShablonLogic";
export function Shablon(props) {
  const [testnews, settestnews] = useState([
    {
      author: "Zaur Rzaev",
      title: "Первый день без преступлений с применением насилия",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8mJiYAAAAUFBQjIyMzMzPn5+fr6+utra22trZwcHCOjo4cHBwPDw8ZGRn39/fY2NiWlpZ/f39DQ0MrKysJCQmhoaHx8fG0tLRra2vg4OC8vLyVlZV+fn52dnZtB+3aAAABb0lEQVR4nO3aXU/CMBiAUdgGfjFQBEFF///P1ISwdckaViDRwjmXXd+yJ9wwYDQCAAAAAAAAAAAAAAAAAAAAAAAAgL37okxSbA+T09TJ98PkXeJk/MinIYX1OMn6oS1Mm5w/toVpk1Hl/yqcKUynUGEvhXEKT6Dw1gurULs8oDAyeU5h/4nnFVavgUl77PHC2OSAwroIRI+8UGERbnopEwo7k2/t5PHCervY/Npv+gg2dY5czi9UuDi5cNM/ebxw/RlMPitUqFChQoUKFSpUqFChQoUKFSpUqFBh9oXh8UnfCOdSWK0Cwfr1FMZ+RrmiwgiFChUqVKhQ4R8WrqtencJd3a4n/tukFf6DNvKa3cLgQnjHX2WzPqywmvQqO+/huFmvmruIfi7tP3Cy+m4K5/07qk7hrL1Qh3e8XDXr492AwtMNerbI2qDnw6wpzJ/C/CnMn8L8KczftIi4mkIAAAAAAAAAAAAAAAAAAABuxQ+a2VKQTE1ZPQAAAABJRU5ErkJggg==",
      views: "4637",
      id: "1",
      lang: "Dart",
    },
    {
      author: "Amir Rzaev",
      title: "Изображения могут быть защищены авторским правом. ",
      img: "https://i.stack.imgur.com/hvbyk.png",
      views: "78376",
      lang: "Dart",
    },
    {
      author: "Zaur Rzaev",
      title: "Первый день без преступлений с применением насилия",
      img: "https://i.stack.imgur.com/N0Ir3.png",
      views: "4637",
      lang: "Dart",
    },
    {
      author: "Amir Rzaev",
      title: "Изображения могут быть защищены авторским правом. ",
      img: "https://habrastorage.org/getpro/habr/post_images/d07/5e5/26f/d075e526f5dce59eb0525915256cdea5.gif",
      views: "78376",
      lang: "Dart",
    },
    {
      author: "Zaur Rzaev",
      title: "Первый день без преступлений с применением насилия",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Q9GdazTp2wL5ACRSlHfg2FCNpAFV5hbO0g&usqp=CAU",
      views: "4637",
      lang: "Dart",
    },
  ]);
  const [logged, setlogged] = useState([
    {
      nikname: "zaur",
      email: "rzaevzaur2@gmail.com",
      log: true,
      status: "user",
    },
  ]);
  const [profileav, setprofile] = useState(false);
  const [selectlg, setselectlg] = useState(false);

  const urlAccount = "https://engine.mineapp.ru/account.php?mod=getjson";

  const handleDelAnim = () => {
    const avatar = document.getElementById("Avatar");
    avatar.classList.value = "";
    avatar.classList.toggle("AvatarDelAnim");
    const profile = document.getElementById("profile");
    profile.classList.value = "";
    profile.classList.toggle("ProfileDelAnim");
    const profileav = document.getElementById("profileavatar");
    profileav.classList.value =
      "MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault hideprofileav css-w4s36x-MuiAvatar-root";

    console.log(profile.classList.value);
    setprofile(false);
    if (selectlg === false) {
      setprofile(!profileav);
    } else {
      setselectlg(!selectlg);
    }
  };
  const handleStartAnim = () => {
    const avatar = document.getElementById("Avatar");
    avatar.classList.value = "";
    avatar.classList.toggle("AvatarStartAnim");
    const profile = document.getElementById("profile");
    profile.classList.value = "";
    profile.classList.toggle("ProfileStartAnim");
    const profileav = document.getElementById("profileavatar");
    setTimeout(() => {
      profileav.classList.value =
        "MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault profileavatar css-w4s36x-MuiAvatar-root";
      profileav.classList.toggle("profileavatar");
    }, 210);
    console.log(profile.classList.value);
    setprofile(true);
    if (selectlg === false) {
      setprofile(!profileav);
    } else {
      setselectlg(!selectlg);
    }
    setTimeout(() => {
      avatar.classList.value = "";
      console.log(avatar);
      avatar.classList.toggle("AvatarNone");
    }, 210);
  };
  const HandlerLoad = () => {
    console.log("ok");
    logged.map((item) => {
      if (item.log === true) {
        document.getElementById("lock").remove();
        console.log("logged");
      } else {
        document.getElementById("divStat").remove();
        console.log("not logged");
      }
    });
  };
  useEffect(() => {
    axios.get(urlAccount).then((data) => {
      console.log(data.data);
      setlogged(data.data);
    });
  }, []);
  const clickselector = () => {
    if (profileav === false) {
      setselectlg(!selectlg);
    } else {
      setprofile(!profileav);
      setselectlg(!selectlg);
    }
  };

  return (
    <div>
      {logged.map((item) => {
        return (
          <>
            <div className="leftnavbar"></div>
            <div className="navbar">
              <text className="selectedlg">{props.namelg}</text>
              <input className="search" placeholder="поиск"></input>
              <div>
                <CgMenuGridO className="gridicon" onClick={clickselector} />
              </div>
              <div
                className={profileav ? "AvatarStartAnim" : "AvatarDelAnim"}
                id="Avatar"
              >
                <Avatar
                  alt={item.nikname}
                  src="/broken-image.jpg"
                  className="avatar"
                  onClick={() => {
                    handleStartAnim();
                    console.log(profileav);
                  }}
                  style={{
                    backgroundColor: "#5992c8",
                  }}
                />
              </div>
            </div>
            <div className={selectlg ? "selector" : "hideselector"}>
              <BiArrowBack
                className="gridiconselector"
                onClick={() => setselectlg(!selectlg)}
              />
              <List />
              <footer></footer>
            </div>
            <div className="prof">
              <div
                className={profileav ? "ProfileStartAnim" : "ProfileDelAnim"}
                id="profile"
              >
                <div>
                  <text style={{ margin: 20, fontSize: 24 }}>Аккаунт</text>
                  <GrClose
                    style={{
                      marginLeft: 90,
                      fontSize: 25,
                      transform: "translateY(10px)",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      handleDelAnim();
                      console.log(profileav);
                    }}
                  />
                  <br />
                  <text style={{ margin: 20, fontSize: 16 }}>Баланс:</text>
                  <text>0p</text>
                  <Avatar
                    id="profileavatar"
                    alt={item.nikname}
                    src="/broken-image.jpg"
                    className="hideprofileav"
                    sx={{ width: 70, height: 70 }}
                    style={{
                      margin: 20,
                      backgroundColor: "#5992c8",
                    }}
                  />

                  <text className="name">
                    {item.nikname === "" ? (
                      <text>Anonim</text>
                    ) : (
                      <text>
                        {item.nikname}
                        {item.status === "admin" ? (
                          <AiTwotonePropertySafety color="red"></AiTwotonePropertySafety>
                        ) : (
                          ""
                        )}
                      </text>
                    )}
                  </text>
                  <text className="email">
                    {" "}
                    {item.email === "" ? (
                      <text>Anonim</text>
                    ) : (
                      <text>{item.email}</text>
                    )}
                  </text>
                  <div id="lock">
                    <a className="login" href="/logreg">
                      Войти
                    </a>
                    <a className="reg" href="/logreg">
                      Регистрация
                    </a>
                    <div className="showlock">
                      <AiFillLock
                        id="lock"
                        style={{ width: "100%", height: "100%" }}
                      ></AiFillLock>

                      <lu>Для полного доступа к профилю, зарегистрируйтесь!</lu>
                      <img
                        style={{ display: "none" }}
                        id="lock"
                        src={lockimg}
                        onLoad={HandlerLoad}
                      ></img>
                    </div>
                  </div>
                  <div id="divStat">
                    <button className="logout">Выйти</button>
                    <text style={{ margin: 20, fontSize: 24 }}>Статистика</text>
                    <Stat />
                    <text style={{ margin: 20, fontSize: 24 }}>Настройки</text>
                    <div className="settings"></div>
                    <text style={{ margin: 20, fontSize: 24 }}>Статьи</text>
                    <div className="article">
                      <button className="createarticle" href="/CreateArt">
                        <a
                          href="/CreateArt"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Создать статью
                        </a>
                      </button>
                      <div className="margin">
                        <ShablonLogic data={testnews} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
