import Header from '../composants/Header';
import Footer from '../composants/Footer';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements';

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
            <img src={logementEnCours.cover} alt="" />
        </div>
        <div className='Titre'>
        <h1>{logementEnCours.title}</h1>
        <p className='Localisation'>{logementEnCours.location}</p>
        </div>
        <div className='Hôte'>
            <h3>{logementEnCours.host.name}</h3>
            <img src={logementEnCours.host.picture} alt="photo hôte" />
        </div>
        <div className='Mots-clés'>{logementEnCours.tags}</div>
        <div className='Note'>{logementEnCours.rating}</div>
        <div className='Contenu'>
        <h4>Description</h4>
        <p>{logementEnCours.description}</p>
        <h4>Equipements</h4>
        <p>{logementEnCours.equipments}</p>
        </div>
        </main>
        <Footer/>
    </div>
    )
}