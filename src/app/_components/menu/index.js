import React from 'react'
import Link from 'next/link'
import style from './style.module.css'

const Menu = () => {
  return (
    <div className={style.menu}>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projetos">Projetos</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
        </ul>
    </div>
  )
}

export default Menu