import { useState } from 'react'
import { Player } from '../../models/player';

interface PokerProps {
  bigBlind: number,
  smallBlind: number,
  players: Player[],
}

const Poker = () => {
  const [players, setPlayers] = useState<Player[]>();

  return (
    <div className='nb-poker-game'>
      <div className='nb-poker-table'>

      </div>
      
      <div className='nb-user-hud'>

      </div>

      <div className='nb-other-players'>
        
      </div>

    </div>
  )
}

export default Poker