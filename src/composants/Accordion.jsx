import{useState} from 'react'
import flèche_haut from '../assets/flèche_haut.png';
import flèche_bas from '../assets/flèche_bas.png';

export default function Accordion({ titre, contenu }) {
    const [openAcc, setOpenAcc] = useState(false)
    
      return (
        <div className='accordeon'>
            <div className='acc-header' onClick={()=> setOpenAcc(!openAcc)}>
                <h4 >{titre}</h4>
                {
                    openAcc ?
                    <img src={flèche_haut} alt="flèche" />:
                    <img src={flèche_bas} alt="flèche" />
                }
            </div>
            {openAcc && <div className='acc-content'>{contenu}</div>}
        </div>

    )
}
