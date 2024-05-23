import React from 'react'
import style from "./style.module.css"

const GalleryPost = (props) => {
    const videoUrl = `https://www.youtube.com/embed/${props.video}`;

  return (
    <div className={style.galleryPost}>
        <iframe
            // width="560"
            // height="315"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
        <p>{props.text} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus magna justo, at posuere nisi cursus quis. Sed semper orci non mollis convallis. Praesent in nisl arcu. Cras ut est ut tellus sodales aliquet. Quisque non magna id est gravida interdum vitae in tellus. Nullam a purus orci. In ac venenatis ex. Pellentesque sed ex sapien. Morbi ex felis, fermentum et porttitor at, congue ac sapien. Donec volutpat massa vel mauris cursus, sed aliquam felis pharetra. Aenean ac libero orci. Suspendisse ut est eu lectus ultricies efficitur sed at ante. Aliquam non condimentum dolor. Integer efficitur, tellus ac rutrum aliquam.</p>
    </div>
  )
}

export default GalleryPost