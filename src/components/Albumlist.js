import React, { useEffect, useState } from "react";
import { db } from "../db/firestoreinit";
import { collection, onSnapshot } from "firebase/firestore";
import style from "./albumlist.module.css";
import AlbumForm from "./AlbumForm";
import Album from "./Album";

const Albumlist = ({setId, setIsShow, isShow}) => {
    const [isForm, setIsForm] = useState(false)
    const [albums, setAlbums] = useState([]);

    useEffect(()=> {
        const unsub = onSnapshot(collection(db, 'album'), (snapshot)=> {
            const collectionRef = snapshot.docs.map((doc)=> {
                return {
                    id: doc.id,
                ...doc.data()
                }
            })
            setAlbums(collectionRef)
        })
    },[])

    const toggleForm = () => {
        setIsForm(!isForm)
        
    }

  return (
    <div>
        {isForm ? <div className="form">
        <AlbumForm />
      </div> : null }
      
      <div className={style.albums}>
        <div className={style.albumHeader}>
          <h2>Your albums</h2>
          <button onClick={toggleForm} className={isForm? style.cancel : style.add}>{isForm? "cancel": "Add album"}</button>
        </div>
        <div  className={style.albumList}>
            {albums.map((album, index)=> (
                <Album key={index} album={album}  setIsShow={setIsShow} setId={setId} isShow={isShow}/>
            ))}
            
        </div>
      </div>
    </div>
  );
};

export default Albumlist;
