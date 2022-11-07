import { useCallback, useState } from "react";
import '../form-common.css';
import "./join-room.css";

const joinExistingRoom = (username: string, roomCode: string) => {
  const joinRoomConfig = {
    username,
    roomCode,
  }
  console.log(JSON.stringify(joinRoomConfig));
}

interface JoinRoomProps {
  onExit: () => void,
}

const JoinRoom = ({
  onExit,
}: JoinRoomProps) => {
  const [username, setUsername] = useState<string>('');
  const [roomCode, setRoomCode] = useState<string>('');

  const joinRoom = useCallback(() => {
    joinExistingRoom(username, roomCode);
  }, [username, roomCode]);

  return (
    <div className="join-room-modal">
      <div className="nb-form-header">
        <div className="nb-form-title">JOIN ROOM</div>
        <div className="nb-form-exit" onClick={onExit}>X</div>
      </div>

      <div className="nb-form-input-group">
        <input 
          className="nb-form-input-box"
          type="text"
          placeholder="USERNAME"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input 
          className="nb-form-input-box" 
          type="text" 
          placeholder="ROOM CODE" 
          onChange={(event) => setRoomCode(event.target.value)}
        />
      </div>
      <button className="nb-form-success-button" onClick={joinRoom}>
        JOIN ROOM
      </button>
    </div>
  )
}

export default JoinRoom