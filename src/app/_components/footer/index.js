import React from 'react'
import Link from 'next/link'
import style from './style.module.css'

const Footer = () => {
  return (
    <div className={style.footer}>
        <ul>
            <p>Contatos</p>
            <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" Link="https://www.instagram.com/produtorafindout/"/>
        </ul>
    </div>
  )
}

export default Footer