import React, { useMemo } from 'react'
import { CardSuit, CardValue } from './card.types';

const CARD_IMAGE_PREFIX = './res';

export interface CardProps {
  value: CardValue,
  suit: CardSuit,
}

const Card = ({value, suit}: CardProps) => { 
  
  return (
    <div className="neon-bets-playing-card">
      <img src={CARD_IMAGE_PREFIX + value + "-" + suit + ".svg"}/>
    </div>
  )
}

export default Card