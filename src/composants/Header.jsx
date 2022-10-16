import React from 'react'
import Logo from '../assets/LOGO.png';
import { Link } from 'react-router-dom';
 
export default function Header() {
  return (
    <header>
      <p className='LOGO'>
        <img src={Logo} alt="Logo Kasa" />
      </p>
      <nav>
        <ul>
          <li className='Accueil'><Link to={`/`}>Accueil</Link></li>
          <li className='A-propos'><Link to={`/a-propos`}>A propos</Link></li>
        </ul>
      </nav> 

    </header>
  )
}
