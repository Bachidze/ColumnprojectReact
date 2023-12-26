import { useState } from 'react'

import './App.css'
import Card from './components/card/Card'

function App(props) {

  return (
    <>
      <Card
       imgUrl = '/assets/Pirvelimanqana.svg'
       name = 'Sedans'
       desc = 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
       button = 'Learn More'
      />

      <Card
       name = 'SUVS'
       desc = 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
       button = 'Learn More'
       imgUrl = '/assets/Meoremanqana.svg'
      />

      <Card
       name = 'Luxury'
       desc = 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '
       button = 'Learn More'
       imgUrl = '/assets/Mesamemanqana.svg'
      />
    </>
  )
}

export default App