import { CardSuit, CardValue, CardValueStringMap } from './card.types';

const CARD_IMAGE_PREFIX = '/src/ui/Card/res';

export interface CardProps {
  value?: CardValue,
  suit?: CardSuit,
  className?: string,
}

const Card = ({value, suit, className}: CardProps) => { 
  
  return (value && suit)
  ? <div className={`neon-bets-playing-card`}>
        <img className={className} src={CARD_IMAGE_PREFIX + `/${suit}/` + CardValueStringMap[value] + "-" + suit + ".svg"}/>
      </div>
  : <img src={CARD_IMAGE_PREFIX + "/card-back.svg"}/>

}

export default Card