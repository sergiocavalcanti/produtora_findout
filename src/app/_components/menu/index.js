import React from 'react'
import Link from 'next/link'
import style from './style.module.css'

const Menu = () => {
  return (
    <div className={style.menu}>
        <ul>
            <p><Link href="/">Home</Link></p>
            <p><Link href="/projetos">Projetos</Link></p>
            <p><Link href="/sobre">Sobre</Link></p>
        </ul>
    </div>
  )
}

export default Menu