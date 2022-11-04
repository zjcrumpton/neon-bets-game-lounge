import { Game } from './games/poker/Game';
import { socket } from './services';
import './App.css';

new Game();

function App() {

  return (
    <div className="App">
      <button onClick={() => socket.emit('NEW_ROOM', { playerName: 'Chad' })}>Create Room</button>
    </div>
  )
}

export default App
