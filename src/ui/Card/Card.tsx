import React, { useMemo } from 'react'
import { CardSuit, CardValue, CardValueStringMap } from './card.types';

const CARD_IMAGE_PREFIX = '/src/ui/Card/res';

export interface CardProps {
  value: CardValue,
  suit: CardSuit,
  className?: string,
  showBackOverride?: boolean,
}

const Card = ({value, suit, className, showBackOverride}: CardProps) => { 
  
  return showBackOverride 
    ? <img src={CARD_IMAGE_PREFIX + "/card-back.svg"}/>
    : <div className={`neon-bets-playing-card`}>
        <img className={className} src={CARD_IMAGE_PREFIX + `/${suit}/` + CardValueStringMap[value] + "-" + suit + ".svg"}/>
      </div>

}

export default Card