import React, { useState } from 'react'
import './CardStyle.css'
import CardDetails from './CardApi'
import CoffeeCard from './CoffeeCard'

const CardSection = () => {

  const [cardData, SetcardData] = useState(CardDetails)

  return (
    <>
    <CoffeeCard cardData={cardData}/>
    </>
  )
}

export default CardSection







