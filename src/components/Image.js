import React, { useState } from 'react'
import { db } from "../db/firestoreinit";
import {doc, deleteDoc} from 'firebase/firestore';
import style from './image.module.css'

const Image = ({image, imgTitle, index, setGetIndex, setIsClosed, handleDelete}) => {

  const [isButton, setIsButton] = useState(false);

  const handleClick = () => {
    setGetIndex(index)
    setIsClosed(false)
  }

  const handleHover = () => {
    setIsButton(true)
  }

  const handleLeave = () => {
    setIsButton(false)
  }

  // const handleDelete = (e) => {
  //   e.stopPropagation();
  //   console.log("Delete: ",image.id)
  // }

  const delteBtn = (e) => {
    e.stopPropagation();
    handleDelete(image.id)
  }

  const editBtn = (e) => {
    e.stopPropagation();
    console.log("Edit: ",image.id)
  }


  return (
    <div className={style.image} onClick={handleClick} onMouseOver={handleHover} onMouseLeave={handleLeave}>
      <div className={style.imgWrapper}>
        <img src={image.imgUrl} alt="" />
      </div>
      <div className={style.imgTitle}>
        <p className={style.title}>
            {imgTitle}
        </p>
      </div>
      {isButton ? <div className={style.btns}>
        <button onClick={editBtn}><img src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png" alt="" /></button>
        <button onClick={delteBtn}><img src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png" alt="" /></button>
      </div> : null}
    </div>
  )
}

export default Image
