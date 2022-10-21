import Header from '../composants/Header';
import Footer from '../composants/Footer';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements';
import flèche_haut from '../assets/flèche_haut.png';
import flèche_arrière from '../assets/arrow_back_ios-24px 1.png'
import flèche_avant from '../assets/arrow_forward_ios-24px 1.png'

export default function Fiche() {
    const [logementEnCours, setLogementEnCours] = useState(null)
    const{id}=useParams()
    useEffect(()=>{
        const resultat=logements.find(l=>l.id==id);
        console.log(id)
        console.log(resultat)
        setLogementEnCours(resultat);
    },[])
    if (!logementEnCours) {
        return (<></>)
    }
    return (
    <div className="Fiche">
        <Header/>
        <main>
        <div className='Section1'>
            <img src={logementEnCours.pictures} alt="photos carrousel" />
            <div><img src={flèche_arrière} alt="flèche arrière" /><img src={logementEnCours.cover} alt="aperçu du logement" /><img src={flèche_avant} alt="flèche avant" /></div>
        </div>
        <div className='Titre'>
        <h1>{logementEnCours.title}</h1>
        <p className='Localisation'>{logementEnCours.location}</p>
        </div>
        <aside className='Hôte'>
            <h3>{logementEnCours.host.name}</h3>
            <div className='Cercle-Hôte'>
            <img src={logementEnCours.host.picture} alt="photo hôte" />
            </div>
        </aside>
        <div className='Mots-clés'>
            <div className='Rectangle3'>
            {logementEnCours.tags}
            </div>
        </div>
        <div className='Note'>{logementEnCours.rating}</div>
        <div className='Dropdown'>
        <h4 className='Rectangle4'>Description <button><img src={flèche_haut} alt="flèche" /></button></h4>
        <p>{logementEnCours.description}</p>
        <h4 className='Rectangle4'>Equipements <button><img src={flèche_haut} alt="flèche" /></button></h4>
        <p>{logementEnCours.equipments}</p>
        </div>
        </main>
        <Footer/>
    </div>
    )
}