import React from 'react'
import style from './Loading.module.css'
import loadingGif from '../../assets/images/loading.gif'
import { useSelector } from 'react-redux'

export default function Loading() {
  const {isLoading} = useSelector(state => state.LoadingReducer)
  return (
    isLoading && <div className={style['wrapper']}>
        <div className={style['container']}>
            <img src={loadingGif} alt="loading" />
            <p>Please wait...</p>
        </div>
    </div>
  )
}
