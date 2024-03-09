import React from 'react'
import style from './album.module.css'

const Album = ({album, setId, setIsShow, isShow}) => {
  const {id, albumName} = album
  const handleClick = () => {
    setId(id);
    setIsShow(!isShow);
  }
  return (
    <div className={style.album} onClick={handleClick}>
      <div className={style.imgWrapper}>
        <img src="https://cdn-icons-png.flaticon.com/128/8418/8418513.png" alt="" />
      </div>
      <div className={style.albumTitle}>
        <p className={style.title}>
            {albumName}
        </p>
      </div>
    </div>
  )
}

export default Album
