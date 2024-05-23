import React from 'react'
import Link from 'next/link'
import style from './style.module.css'

const Footer = () => {
  return (
    <div className={style.footer}>
            <p>Contatos</p>
            <a href="https://www.instagram.com/produtorafindout/">
            <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png"/>
            </a>
    </div>
  )
}

export default Footer