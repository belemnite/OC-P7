import React from 'react'
import { Link } from 'react-router-dom'

export default function Logement(props) {
  return (
    <Link to={props.id} className='carte-logement'><h2>{props.titre}</h2><img src={props.image} alt="" /></Link>
  )
}
