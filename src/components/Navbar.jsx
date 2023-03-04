// import { useEffect } from "react"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  return (
    <nav
      className={`
    ${styles.paddindX} w-full items-center py-5 fixed top-0 z-20 bg-primary
    `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-ceenter gap-2"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt={logo} className="w-16 h-16 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Salau <span className="sm:block hidden">| Tobiloba</span>
          </p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
