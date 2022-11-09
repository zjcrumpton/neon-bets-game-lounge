import { useState } from 'react'
import { Player } from '../../../../../models/player';
import Card, { CardProps } from '../../../../../ui/Card/Card';
import { CardSuit, CardValue } from '../../../../../ui/Card/card.types';
import './poker.css'

interface PokerProps {
  bigBlind: number,
  smallBlind: number,
  players: Player[],
}

interface SampleData {
  playerCards: CardProps[];
}

const sampleData: SampleData = {
  playerCards: [
    {
      suit: CardSuit.DIAMONDS,
      value: CardValue.ACE,
    },
    {
      suit: CardSuit.CLUBS,
      value: CardValue.ACE,
    }
  ],
}


const Poker = () => {
  const [players, setPlayers] = useState<Player[]>();

  return (
    <div className='nb-poker-game'>
      <div className='nb-poker-table'>

      </div>
      
      <div className='nb-user-hud'>
        <div className='nb-user-hud-left'>

        </div>
        
        <div className='nb-user-hud-center'>
          <div className='nb-user-hud-cards'>
            {
              sampleData.playerCards.map((cardProps: CardProps) => {
                return <Card className='nb-player-card' {...cardProps} />
              })
            }
          </div>
          <div className='nb-user-hud-info'>
            <div className='nb-user-hud-info-money'>$1000</div>
            <div className='nb-user-hud-info-name'>Jason The Prodigal Son</div>
          </div>
          
        </div>

        <div className='nb-user-hud-right'>

        </div>


      </div>

      <div className='nb-other-players'>
        
      </div>

    </div>
  )
}

export default Poker