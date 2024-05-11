import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    <div>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projetos">Projetos</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
        </ul>
    </div>
  )
}

export default Menu