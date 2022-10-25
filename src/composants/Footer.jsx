import React from 'react'
import Logo from '../assets/LOGO.svg'; 

export default function Footer() {
  return (
    <footer>
      <p className='logo'>
      <img src={Logo} alt="Logo Kasa" />
      </p>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
