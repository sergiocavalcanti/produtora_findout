import React from 'react'
import GalleryPost from './galleryProject'
import loadMV from '../api/apiProject'
import style from "./style.module.css"

const Gallery = () => {
  return (
    <div className={style.gallery}>
      <div className={style.wrapper}>
        {
            loadMV.map((video, index) => {
                return (<GalleryPost key={index} video={video[0]} text={video[1]}/>)
            })
        }
      </div>
    </div>
  )
}

export default Gallery