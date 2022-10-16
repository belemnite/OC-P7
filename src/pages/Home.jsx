import { useState } from 'react'
import Header from '../composants/Header';
import Footer from '../composants/Footer';
import logements from '../data/logements';
import Logement from '../composants/Logement';
import paysage from '../assets/paysage.png'


function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="Home">
      <Header/>
      <div className='Section1'>
        <img src={paysage} alt="paysage" />
      <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <main className='logement'>{logements.map(logement=><Logement key={logement.id} id={logement.id} titre={logement.title} image={logement.cover}/>)}</main>
      <div className="card">
      </div>

    <Footer/>
    </div>
  )
}

export default Home
