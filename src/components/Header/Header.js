import React from 'react'
import Logo from '../Logo/Logo'
import style from './Header.module.css'

export default function Header() {
  return (
    <header className={style['wrapper']}>
        <div className={style['header']}>
            <div className={style['header-item']}>
                <Logo />
            </div>
            <form className={`${style['search-form']} ${style['header-item']} ${style['center']}`}>
                <div>
                    <input type="text" placeholder='Tìm kiếm' />
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </form>
            <div className={`${style['header-item']}`} style={{textAlign: 'right'}}>
                <span className={style['help']}>
                    <i className="fa-solid fa-question"></i>
                </span>
            </div>
        </div>
    </header>
  )
}
