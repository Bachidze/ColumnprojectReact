import React from 'react'
import './Card.css'

const Card = (props) => {

  return (
    <div className='card'>
        <img src={props.imgUrl} alt="pirveli Manqanis Photo" />
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
        <button>{props.button}</button>
    </div>
  )
}

export default Card