import React from 'react'
import GalleryPost from './galleryPost'
import loadMV from '@/app/api/api'

const Gallery = () => {
  return (
    <div>
        Gallery
        {
            loadMV.map((video, index) => {
                return (<GalleryPost key={index} video={video[0]} text={video[1]}/>)
            })
        }
    </div>
  )
}

export default Gallery