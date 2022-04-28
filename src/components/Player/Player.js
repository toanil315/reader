import React, { useRef, useState } from "react";
import style from "./Player.module.css";
import wavBgImg from "../../assets/images/wav-bg-3.jpg";

export default function Player() {
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef(null);

  const handleOnPlay = () => {
    if (!isPlay) audioRef.current.play();
    else audioRef.current.pause();
    setIsPlay(!isPlay);
  };
  
  console.log(isPlay)

  return (
    <div className={style["player"]}>
      <div className={style["container"]}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={style["left"]} style={{ backgroundImage: `url(${wavBgImg})` }}>
            <i className="fa-brands fa-itunes-note"></i>
          </div>
          <h3>audio_21-04-2022-13_38_46_dwyops.wav</h3>
        </div>
        <div className={style["controls"]}>
          <button className={`${style["back"]}`}>
            <i className="fa-solid fa-backward-step"></i>
          </button>
          <button
            className={`${style["play"]}`}
            onClick={() => {
              handleOnPlay();
            }}
          >
            {isPlay ? (
                <i className="fa-solid fa-pause"></i>
            ) : (
                <i style={{ paddingLeft: "3px" }} className="fa-solid fa-play"></i>
            )}
            {isPlay ? <span className={style["active-play"]}></span> : ""}
          </button>
          <button className={`${style["next"]}`}>
            <i className="fa-solid fa-forward-step"></i>
          </button>
        </div>
        <div className={style["audio"]}>
          <audio
            ref={audioRef}
            src="https://res.cloudinary.com/toanil315/video/upload/v1651054664/wav/audio_21-04-2022-13_38_46_dwyops.wav"
            controls
          />
        </div>
      </div>
    </div>
  );
}
