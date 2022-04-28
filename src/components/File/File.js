import React from 'react'
import style from './File.module.css'
import wavBgImg from '../../assets/images/wav-bg-3.jpg'

export default function File() {
  return (
    <div className={style['file']}>
        <div className={style['header']} style={{backgroundImage: `url(${wavBgImg})`}}>
            <i className="fa-brands fa-itunes-note"></i>
        </div>
        <div className={style['content']}>
            <h4>audio_21-04-2022-13_38_46_dwyops.wav</h4>
            <p className={style['time']}>
                <i className="fa-solid fa-clock"></i>
                <span>21-04-2022 13:38:46</span>
            </p>
        </div>
        <div className={style['bottom']}>
            <span>
                <i className="fa-brands fa-itunes-note"></i>
                <span>WAV</span>
            </span>
            <span>6.34MB</span>
        </div>
    </div>
  )
}
