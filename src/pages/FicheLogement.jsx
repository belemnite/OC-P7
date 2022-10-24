import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Accordion from '../composants/Accordion';
import Carrousel from '../composants/Carrousel';
import Rating from '../composants/Rating';
import Equipment from '../composants/Equipment';
import Footer from '../composants/Footer';
import Header from '../composants/Header';
import logements from '../data/logements';

export default function Fiche() {
    const [logementEnCours, setLogementEnCours] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        const resultat = logements.find(l => l.id == id);
        console.log(id)
        console.log(resultat)
        setLogementEnCours(resultat);
    }, [])
    if (!logementEnCours) {
        return (<></>)
    }
    return (
        <div className="Fiche">
            <Header />
            <main>
                <Carrousel cover={logementEnCours.cover} gallery={logementEnCours.pictures} />
                <div className="heading">
                    <div className='Titre'>
                        <h1>{logementEnCours.title}</h1>
                        <p className='Localisation'>{logementEnCours.location}</p>
                        <div className='mots-cles'>
                            {logementEnCours.tags.map((tag, idx) =>
                                <div key={idx} className='tag'>
                                    <div>{tag}</div>
                                </div>)}
                        </div>
                    </div>
                    <aside className='hote'>
                        <div className="info-hote">
                        <h3>{logementEnCours.host.name}</h3>
                        <div className='cercle-hote'>
                            <img src={logementEnCours.host.picture} alt="photo hôte" />
                        </div>
                        </div>
                        <Rating note={logementEnCours.rating} />
                    </aside>
                </div>
                <div className='Dropdown'>
                    <Accordion titre={"Description"} contenu={logementEnCours.description} />
                    <Accordion titre={"Équipements"} contenu={<ul>{logementEnCours.equipments.map((equipment, idx) => <Equipment key={idx} contenu={equipment}></Equipment>)} </ul>} />
                </div>
            </main>
            <Footer />
        </div>
    )
}