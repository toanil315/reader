import React, { useRef, useState, useEffect } from "react";
import style from "./Player.module.css";
import wavBgImg from "../../assets/images/wav-bg-3.jpg";
import {useSelector, useDispatch} from "react-redux"

export default function Player() {
  const audioRef = useRef(null);
  const {currentAudio, isPlaying} = useSelector(state => state.PlayerReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause(); 
  }, [isPlaying])

  const handlePlay = () => {
    dispatch({
      type: "TOGGLE_AUDIO",
      payload: {
        isPlaying: !isPlaying
      }
    })
  };

  return (
    currentAudio && <div className={style["player"]}>
      <div className={style["container"]}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className={style["left"]} style={{ backgroundImage: `url(${wavBgImg})` }}>
            <i className="fa-brands fa-itunes-note"></i>
          </div>
          <h3>{currentAudio.audioName}</h3>
        </div>
        <div className={style["controls"]}>
          <button onClick={() => {
            audioRef.current.currentTime -= 10
          }} className={`${style["back"]}`}>
            <i className="fa-solid fa-backward-step"></i>
          </button>
          <button
            className={`${style["play"]}`}
            onClick={() => {
              handlePlay();
            }}
          >
            {isPlaying ? (
                <i className="fa-solid fa-pause"></i>
            ) : (
                <i style={{ paddingLeft: "3px" }} className="fa-solid fa-play"></i>
            )}
            {isPlaying ? <span className={style["active-play"]}></span> : ""}
          </button>
          <button onClick={() => {
            audioRef.current.currentTime += 10
          }} className={`${style["next"]}`}>
            <i className="fa-solid fa-forward-step"></i>
          </button>
        </div>
        <div className={style["audio"]}>
          <audio
            ref={audioRef}
            src={currentAudio.url}
            onEnded={() => {
              console.log("ended")
              dispatch({
                type: "TOGGLE_AUDIO",
                payload: {
                  isPlaying: false
                }
              })
            }}
            controls
          />
        </div>
      </div>
    </div>
  );
}
