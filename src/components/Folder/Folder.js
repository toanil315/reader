import React from 'react'
import style from './Folder.module.css'

export default function Folder() {
  return (
    <div className={style['folder']}>
        <i className="fa-solid fa-folder"></i>
        <span>27-04-2022</span>
    </div>
  )
}
