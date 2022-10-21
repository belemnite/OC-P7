import React from 'react'
import Footer from '../composants/Footer'
import Header from '../composants/Header'
import paysage2 from '../assets/paysage2.png'
import flèche_haut from '../assets/flèche_haut.png'
import Accordion from '../composants/Accordion';

export default function About() {
  return (
    <><Header />
    <div className='Section1'>
      <img src={paysage2} alt="paysage_section_à_propos" srcset="" />
    </div>
    <div className='Dropdown'>
      <Accordion titre={"Fiabilité"} contenu={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}> </Accordion>
      <Accordion titre={"Respect"} contenu={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}></Accordion>
      <Accordion titre={"Service"} contenu={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}></Accordion>
      <Accordion titre={"Responsabilité"} contenu={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}></Accordion>
  </div>
    <Footer/>
    </>
  )
}
