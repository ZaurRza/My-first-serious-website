import "../scss/App.scss";
import "../scss/Media.scss";
import "../scss/Carousel.scss";
import "../scss/Articles.scss";
import "../scss/RegLog.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FcLike } from "react-icons/fc";
import { Formik } from "formik";
const Reg = async (Email, Username, Password) => {
  if (!Email || !Username || !Password) {
    console.log("esf");
    return;
  }

  const res = await axios({
    url: "https://engine.mineapp.ru/app.php/user",
    method: "post",
    data: {
      name: Username,
      email: Email,
      password: Password,
    },
  });
  console.log(res);
};
const Log = async (Email, Password) => {
  if (!Email || !Password) {
    console.log("esf");
    return;
  }

  const res = await axios({
    url: "https://engine.mineapp.ru/app.php/user",
    method: "get",
    params: {
      email: Email,
      password: Password,
    },
  });
  console.log(res);
};
export function Register() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        Nickname: "",
        passwordcheck: "",
      }}
      validate={(values) => {
        const errors = {};

        if (values.password !== values.passwordcheck) {
          errors.passwordcheck = "Пароль не совпадает";
          console.log("not");
        }
        if (values.password.length < 8) {
          errors.password = "Не менее 8 символов";
        }
        if (!/^[A-Z0-9.!()*&?,_%+-]{2,}$/i.test(values.password)) {
          errors.password =
            "Разрешена только латиница,цифры и .!()*&?,_%+- символы";
        }
        if (values.Nickname.length < 4) {
          errors.Nickname = "Не менее 4 символов";
        } else if (!/^[A-Z0-9.!()*&?,_%+-]{2,}$/i.test(values.Nickname)) {
          errors.Nickname =
            "Разрешена только латиница,цифры и .!()*&?,_%+- символы";
        }
        if (!values.email) {
          errors.email = "Введите почту";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Недействительная почта";
        }
        return errors;
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div className="RegPlace">
          <h1>Регистрация</h1>
          <input
            className="inputsreg"
            placeholder="Nickname"
            type="text"
            name="Nickname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Nickname}
          />
          <text style={{ color: "red" }}>
            {errors.Nickname && touched.Nickname && errors.Nickname}
          </text>
          <br />
          <input
            className="inputsreg"
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <text style={{ color: "red" }}>
            {errors.email && touched.email && errors.email}
          </text>
          <br />
          <input
            className="inputsreg"
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <text style={{ color: "red" }}>
            {errors.password && touched.password && errors.password}
          </text>
          <br />
          <input
            className="inputsreg"
            placeholder="Password"
            type="password"
            name="passwordcheck"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.passwordcheck}
          />
          <text style={{ color: "red" }}>
            {errors.passwordcheck &&
              touched.passwordcheck &&
              errors.passwordcheck}
          </text>
          <br />
          <button
            className={
              errors.Nickname ||
              errors.email ||
              errors.password ||
              errors.passwordcheck ||
              values.Nickname === ""
                ? "hideButt"
                : "showRegLogButt"
            }
            onClick={() => Reg(values.email, values.Nickname, values.password)}
          >
            Регистрация
          </button>
        </div>
      )}
    </Formik>
  );
}
export function Login() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};

        if (values.password.length < 8) {
          errors.password = "Не менее 8 символов";
        }

        if (!values.email) {
          errors.email = "Введите почту";
        }
        return errors;
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div className="RegPlace">
          <h1>Вход</h1>

          <input
            className="inputsreg"
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <text style={{ color: "red" }}>
            {errors.email && touched.email && errors.email}
          </text>
          <br />
          <input
            className="inputsreg"
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <text style={{ color: "red" }}>
            {errors.password && touched.password && errors.password}
          </text>
          <br />
          <button
            className={
              errors.email ||
              errors.password ||
              values.email === "" ||
              values.password === ""
                ? "hideButt"
                : "showRegLogButt"
            }
            onClick={() => Log(values.email, values.password)}
          >
            Вход
          </button>
        </div>
      )}
    </Formik>
  );
}
