import React, { useCallback, useMemo } from 'react'
import poker from './res/poker.svg';
import snake from './res/snake.svg';
import './game-selector.css';
import { GameName } from '../../gameScreen.types';

const gameImages: {[key in GameName]: string} = {
  [GameName.POKER]: poker,
  [GameName.SNAKE]: snake, 

}

interface GameSelectorProps {
  onGameSelected: (gameName: GameName) => void,
  onExit: () => void,
}

const GameSelector = ({
  onGameSelected,
  onExit,
}: GameSelectorProps) => {

  const gameList = useMemo(() => {
    return Object.entries(gameImages).map(([key, value], idx) => {
      return (
        <img className='nb-game-icon' key={idx} src={value} onClick={() => onGameSelected(key as GameName)}/>
      )
    });
  }, []);

  return (
    <div className='nb-game-selector'>
      <div className='nb-game-selector-bar'>
        <div className='nb-game-selector-title'>SELECT GAME</div>
        <div className='nb-game-selector-bar-exit' onClick={onExit}>
          X
        </div>
      </div>
      <div className='nb-game-selector-window'>
        {gameList}
      </div>
    </div>
  )
}

export default GameSelector