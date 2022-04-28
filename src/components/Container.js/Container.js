import React, { useRef } from 'react'
import style from './Container.module.css'

export default function Container({children}) {
    const bgRef = useRef([
        "linear-gradient(rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.2) 35%, rgba(255, 255, 255, 0.4) 45%, rgba(255, 255, 255, 0.6) 55%, rgba(255, 255, 255, 0.8) 65%, rgb(255, 255, 255) 100%), linear-gradient(45deg, rgb(22, 244, 197) 0%, rgb(22, 244, 197) 12%, rgb(24, 219, 187) 12%, rgb(24, 219, 187) 51%, rgb(26, 193, 176) 51%, rgb(26, 193, 176) 52%, rgb(28, 168, 166) 52%, rgb(28, 168, 166) 66%, rgb(29, 143, 155) 66%, rgb(29, 143, 155) 73%, rgb(31, 117, 145) 73%, rgb(31, 117, 145) 80%, rgb(33, 92, 134) 80%, rgb(33, 92, 134) 100%)",
        "linear-gradient(rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.2) 35%, rgba(255, 255, 255, 0.4) 45%, rgba(255, 255, 255, 0.6) 55%, rgba(255, 255, 255, 0.8) 65%, rgb(255, 255, 255) 100%), linear-gradient(135deg, rgb(26, 118, 30) 0%, rgb(26, 118, 30) 23%, rgb(72, 215, 80) 23%, rgb(72, 215, 80) 28%, rgb(34, 176, 39) 28%, rgb(34, 176, 39) 35%, rgb(42, 126, 41) 35%, rgb(42, 126, 41) 100%)",
        "linear-gradient(rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0.2) 35%, rgba(255, 255, 255, 0.4) 45%, rgba(255, 255, 255, 0.6) 55%, rgba(255, 255, 255, 0.8) 65%, rgb(255, 255, 255) 100%), radial-gradient(circle at center center, rgb(143, 39, 176) 0%, rgb(143, 39, 176) 11%, rgb(128, 38, 169) 11%, rgb(128, 38, 169) 13%, rgb(113, 38, 163) 13%, rgb(113, 38, 163) 17%, rgb(98, 37, 156) 17%, rgb(98, 37, 156) 28%, rgb(83, 37, 150) 28%, rgb(83, 37, 150) 40%, rgb(68, 36, 143) 40%, rgb(68, 36, 143) 72%, rgb(53, 36, 137) 72%, rgb(53, 36, 137) 81%, rgb(38, 35, 130) 81%, rgb(38, 35, 130) 100%)",
    ])

  return (
    <main className={style['wrapper']} style={{background: bgRef.current[Math.floor(Math.random() * 3)]}}>
        <div className={style['container']}>
            {children}
        </div>
    </main>
  )
}
