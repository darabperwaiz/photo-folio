import React, { useRef } from 'react'
import style from './albumForm.module.css'
import {db} from '../db/firestoreinit'
import { collection, addDoc } from "firebase/firestore"

const AlbumForm = () => {

  const nameRef  = useRef(null);
  console.log(nameRef)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const collectionRef = await addDoc(collection(db, "album"), {
      albumName: nameRef.current.value,
      images: []
    });
    nameRef.current.value = ""

  }

  return (
    <form className={style.AlbumForm}>
      <h2>Create an album</h2>
      <div className={style.formInputs}>
        <input type="text" ref={nameRef}   placeholder="Album Name"/>
        <button type="reset">Clear</button>
        <button onClick={handleSubmit}>Create</button>
      </div>
    </form>
  )
}

export default AlbumForm
