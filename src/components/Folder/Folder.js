import React from "react";
import { Link } from "react-router-dom";
import style from "./Folder.module.css";

export default function Folder({date}) {
  return (
    <Link to={`/folders/${date}`} className={style["folder"]}>
        <i className="fa-solid fa-folder"></i>
        <span>{date}</span>
    </Link>
  );
}
