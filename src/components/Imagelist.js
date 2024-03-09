// import { useEffect } from "react";
import React, { useEffect, useRef, useState } from "react";
import style from './imagelist.module.css'
import { db } from "../db/firestoreinit";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import Image from "./Image";
import Carousel from "./carousel/Carousel";

const Imagelist = ({ setIsShow, id }) => {
  const [data, setImages] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  const [getIndex, setGetIndex] = useState(null);
  const titleRef = useRef();
  const imgUrl = useRef();

  // Get Data from Firestore
  useEffect(() => {
    const getData = async () => {
      onSnapshot(doc(db, "album", id), (doc) => {
        setImages(doc.data());
      });
    };
    getData();
  }, []);


  // Toggle Add Image Form
  const toggleForm = () => {
    setIsOpen(!isOpen)
  }

  // Delete Image from Album
  const handleDelete = (deleteId) => {
    // album references
    const albumRef = doc(db, 'album', id);
    updateDoc(albumRef, {
      images: data.images.filter((image) => image.id!== deleteId)
    })

  }


  // Add Image to Data Collection
  const handleAdd = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "album", id);
    await updateDoc(docRef, {
      images: [{
        id: Math.floor(Math.random() * Date.now()),
        title: titleRef.current.value,
        imgUrl: imgUrl.current.value
      }, ...data.images]
    })
    titleRef.current.value = "";
    imgUrl.current.value = "";
  }


  const updateImage = () => {
    
  }

  // Close Carousel
  const handleClose = (e) => {
    e.stopPropagation();
    setIsClosed(!isClosed)

  }


  return (
    <div>
      <div className={style.imageHeader}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/507/507257.png"
          alt=""
          onClick={() => setIsShow(false)}
        />
        <p className={style.title}>
          {data?.images.length == 0
            ? "No images found in the album"
            : `Images in ${data?.albumName}`}
        </p>
        <button className={isOpen? style.cancelBtn : style.addBtn} onClick={toggleForm}>{isOpen? "Cancel" : 'Add Image'}</button>
      </div>
      {isOpen? <div className={style.inputWrapper}>
        <form className={style.form}>
            <input type="text" ref={titleRef} placeholder="Title"/>
            <input type="text" ref={imgUrl} placeholder="Image URL"/>
            <div className={style.btns}>
                <button type="reset">Clear</button>
                <button onClick={handleAdd}>Add</button>
            </div>
        </form>
      </div> : null}
      
      <div className={style.imageList}>
        {data? data.images.map((image, index)=> (
          <Image key={image.id} index={index} image={image} imgTitle={image.title} setGetIndex={setGetIndex} setIsClosed={setIsClosed} handleDelete={handleDelete}/>
        )): null}
      </div>

      {/* Carousel  */}
      {isClosed? null : <div className={style.CarouselWrap} onClick={handleClose}>
        <Carousel images={data.images} setIsClosed={setIsClosed} getIndex={getIndex} setGetIndex={setGetIndex}/>
      </div>}
      
    </div>
  );
};

export default Imagelist;
