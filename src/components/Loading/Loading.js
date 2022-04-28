import React from 'react'
import style from './Loading.module.css'
import loadingGif from '../../assets/images/loading.gif'

export default function Loading() {
  return (
    <div className={style['wrapper']}>
        <div className={style['container']}>
            <img src={loadingGif} alt="loading" />
            <p>Please wait...</p>
        </div>
    </div>
  )
}
