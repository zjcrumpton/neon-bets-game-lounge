import { FC, useCallback, useState } from "react"
import Button from "../../ui/Button/Button"
import { Poker, Snake } from "./components/Games";
import GameSelector from "./components/GameSelector/GameSelector";
import './game-screen.css';
import { GameName } from "./gameScreen.types";


const games: {[key in GameName]: JSX.Element} = {
  [GameName.POKER]: <Poker />,
  [GameName.SNAKE]: <Snake />,
}

enum GameScreenState {
  DEFAULT,
  SELECTING_GAME,
  GAME_SELECTED,
}

const GameScreen = () => {
  const [gameScreenState, setGameScreenState] = useState<GameScreenState>(GameScreenState.DEFAULT);
  const [CurrentGame, setCurrentGame] = useState<JSX.Element | null>(null);

  const selectGame = useCallback((gameName: GameName) => {
    setCurrentGame(games[gameName]);
    setGameScreenState(GameScreenState.GAME_SELECTED);
  }, []);

  const selectingGame = useCallback(() => {
    setGameScreenState(GameScreenState.SELECTING_GAME);
  }, []);

  const resetGameScreenState = useCallback(() => {
    setGameScreenState(GameScreenState.DEFAULT);
  }, []);


  return (
    <div className="nb-game-screen">
      { gameScreenState === GameScreenState.DEFAULT &&
        <Button 
          className="nb-game-screen-select-game"
          text="SELECT GAME"
          onClick={selectingGame} 
        />
      }
      { gameScreenState === GameScreenState.SELECTING_GAME &&
        <GameSelector 
          onGameSelected={selectGame}
          onExit={resetGameScreenState}
        />
      }
      {
        gameScreenState === GameScreenState.GAME_SELECTED &&
        CurrentGame && CurrentGame
      }
    </div>
  )
}

export default GameScreen