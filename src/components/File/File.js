import React from "react";
import style from "./File.module.css";
import wavBgImg from "../../assets/images/wav-bg-3.jpg";
import { useDispatch } from "react-redux";

export default function File({ audio }) {
  const arrTime = audio.date.split("-");
  const time = `${arrTime[0]}-${arrTime[1]}-${arrTime[2]} ${arrTime[3]}:${arrTime[4]}:${arrTime[5]}`;

  const dispatch = useDispatch()

  const handleClickOnFile = () => {
    dispatch({
      type: "CHANGE_CURRENT_AUDIO",
      payload: {
        audio
      }
    })
  }

  return (
    <div onClick={() => {
      handleClickOnFile()
    }} className={style["file"]}>
      <div className={style["header"]} style={{ backgroundImage: `url(${wavBgImg})` }}>
        <i className="fa-brands fa-itunes-note"></i>
      </div>
      <div className={style["content"]}>
        <h4>{audio.audioName}</h4>
        <p className={style["time"]}>
          <i className="fa-solid fa-clock"></i>
          <span>{time}</span>
        </p>
      </div>
      <div className={style["bottom"]}>
        <span>
          <i className="fa-brands fa-itunes-note"></i>
          <span>WAV</span>
        </span>
      </div>
    </div>
  );
}
