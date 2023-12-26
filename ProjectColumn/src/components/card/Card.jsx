import React from 'react'
import './Card.css'

const Card = ({
    hover,
    name = 'error',
    imgUrl,
    desc ='error',
    backgroundcolor,
    button = 'error'}) => {

  return (
    <div className={`card ${backgroundcolor}`}>
        <img src={imgUrl} alt="pirveli Manqanis Photo" />
        <h1>{name}</h1>
        <p>{desc}</p>
        <button className={`${hover}`}>{button}</button>
    </div>
  )
}

export default Card