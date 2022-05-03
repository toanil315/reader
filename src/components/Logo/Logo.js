import React from "react";
import { Link } from "react-router-dom";
import style from "./Logo.module.css";

export default function Logo({ isHiddenText }) {
  return (
    <Link to={"/"}>
      <span className={style["logo"]}>
        <img src={require("../../assets/images/logo.svg").default} alt="logo" />
        {isHiddenText ? "" : <span>NaturalReader</span>}
      </span>
    </Link>
  );
}
