import React from 'react'
import style from './Logo.module.css'

export default function Logo({isHiddenText}) {
  return (
    <span className={style['logo']}>
        <img src={require("../../assets/images/logo.svg").default} alt="logo" />
        {
            isHiddenText ? "" : <span>NaturalReader</span>
        }
    </span>
  )
}
