import{useState} from 'react';
import flèche_arrière from '../assets/arrow_back_ios-24px 1.png';
import flèche_avant from '../assets/arrow_forward_ios-24px 1.png';

export default function Carrousel({cover, gallery}) {
    const [indexImg, setIndexImg] = useState(-1)
    function nextImg() {
        let index=indexImg;
        index++;
        if (index===gallery.length){
            index=0;
        }
        setIndexImg(index);
    }
    function prevImg() {
        let index=indexImg;
        index--;
        if (index<0){
            index=gallery.length-1;
        }
        setIndexImg(index);
    }
    return (
    <div className='carrousel'>
        <img className='prev' onClick={prevImg} src={flèche_arrière} alt="flèche arrière" />
        <img className='main-picture' src={indexImg === -1 ? cover: gallery[indexImg]} alt="aperçu du logement" />
        <img className='next' onClick={nextImg} src={flèche_avant} alt="flèche avant" />
        {indexImg >=0 && <p className="image-number">{indexImg+1}/{gallery.length}</p>}
    </div>
  )
}
