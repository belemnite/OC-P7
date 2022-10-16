import React from 'react'
import Footer from '../composants/Footer'
import Header from '../composants/Header'
import paysage2 from '../assets/paysage2.png'

export default function About() {
  return (
    <><Header />
    <div className='Section1'>
      <img src={paysage2} alt="paysage_section_à_propos" srcset="" />
    </div>
    <div>
      <ul>
        <li>
        <h4>Fiabilité</h4>
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
        </li>
        <li>
        <h4>Respect</h4>
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </li>
        <li>
        <h4>Service</h4>
        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
        </li>
        <li>
        <h4>Responsabilité</h4>
        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </li>
      </ul>
    </div>
    <Footer/>
    </>
  )
}
