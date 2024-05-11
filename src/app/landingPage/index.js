import React from 'react'
import style from './style.module.css'
import Presentation from "./presentation"
import Gallery from "./gallery"

const LandingPage = () => {
  return (
    <div>
      <Presentation/>
      <Gallery/>
    </div>
  )
}

export default LandingPage