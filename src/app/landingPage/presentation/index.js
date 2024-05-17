import React from 'react'
import style from './style.module.css'

const Presentation = () => {
  return (
    <div className={style.presentation}>
      <iframe width="830" height="500" src="https://www.youtube.com/embed/videoseries?si=Ta8zbrEuN2MtyDaS&amp;controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=0&amp;list=PL8wmuaOnkJMC6IBXFVxRbDaSHhg4FkNuQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
    </div>
  )
}

export default Presentation