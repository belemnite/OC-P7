import React from 'react'
import etoileBlanche from '../assets/star_rate-24px 1.png';
import etoileRouge from '../assets/star_rate-24px 3.png';

export default function Rating({note}) {
  let etoiles=[];
  for (let index = 0; index < note; index++) {
    etoiles.push(
      <img key={index} src={etoileRouge} alt="etoile rating rouge" role="presentation" />
    )
    
  }
  for (let index = note; index < 5; index++) {
    etoiles.push(
      <img key={index} src={etoileBlanche} alt="etoile rating" role="presentation" />
    )
    
  }

  return (
    <div>{etoiles}</div>
  )
}
