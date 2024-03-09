import React from 'react'
import style from './carousel.module.css'

const Carousel = ({images, getIndex, setIsClosed, setGetIndex}) => {

    let currentIndex = getIndex;

    const handlePrev = (e) => {
        e.stopPropagation();
        currentIndex = [currentIndex -1 + images.length] % images.length;
        setGetIndex(currentIndex)
        
    }
    const handleNext = (e) => {

        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        setGetIndex(currentIndex)
    }

    const handleClick = () => {
        setIsClosed(true)
    }
  return (
    <div className={style.Carousel} >
        <div className={style.close} onClick={handleClick}>
            <img src="https://cdn-icons-png.flaticon.com/128/6276/6276642.png" alt="" />
        </div>
        <div className={style.prev} onClick={handlePrev}>
            <img src="https://cdn-icons-png.flaticon.com/128/271/271220.png" alt="" />
        </div>
      <div className={style.carImg}>
        <img src={images[currentIndex].imgUrl} alt="" />
      </div>
      <div className={style.next} onClick={handleNext}>
        <img src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="" />
      </div>
    </div>
  )
}

export default Carousel
