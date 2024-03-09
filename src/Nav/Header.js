import React from 'react'
import style from './header.module.css'

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
      <img src="https://cdn-icons-png.flaticon.com/128/8418/8418513.png" alt="" />
      <p>Photo Folio</p>
      </div>
    </div>
  )
}

export default Header
