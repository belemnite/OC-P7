import React from 'react'
import Footer from '../composants/Footer'
import Header from '../composants/Header'
import paysage2 from '../assets/paysage2.png'
import flèche_haut from '../assets/flèche_haut.png'

export default function About() {
  return (
    <><Header />
    <div className='Section1'>
      <img src={paysage2} alt="paysage_section_à_propos" srcset="" />
    </div>
    <div>
      <ul>
        <li className='Dropdown'>
        <h4 className='Rectangle4'>Fiabilité <button><img src={flèche_haut} alt="flèche_haut"  /></button></h4>
        <p className='Dropdown-open'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
        </li>
        <li className='Dropdown'>
        <h4 className='Rectangle4'>Respect <button><img src={flèche_haut} alt="flèche_haut"  /></button></h4>
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </li>
        <li className='Dropdown'>
        <h4 className='Rectangle4'>Service <button><img src={flèche_haut} alt="flèche_haut"  /></button></h4>
        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
        </li>
        <li className='Dropdown'>
        <h4 className='Rectangle4'>Responsabilité <button><img src={flèche_haut} alt="flèche_haut"  /></button></h4>
        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </li>
      </ul>
    </div>
    <Footer/>
    </>
  )
}
