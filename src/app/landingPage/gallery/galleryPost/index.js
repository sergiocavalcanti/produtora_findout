import React from 'react'

const GalleryPost = (props) => {
    const videoUrl = `https://www.youtube.com/embed/${props.video}`;

  return (
    <div>
        <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
        <p>{props.text}</p>
    </div>
  )
}

export default GalleryPost