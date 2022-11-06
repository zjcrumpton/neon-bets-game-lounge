import { FC, useCallback, useState } from "react";
import "./join-room.css";

const joinExistingRoom = (username: string, roomCode: string) => {
  const joinRoomConfig = {
    username,
    roomCode,
  }
  console.log(JSON.stringify(joinRoomConfig));
}

const JoinRoom: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [roomCode, setRoomCode] = useState<string>('');

  const joinRoom = useCallback(() => {
    joinExistingRoom(username, roomCode);
  }, [username, roomCode]);

  return (
    <div className="join-room-modal">
      <div className="create-room-modal-title">JOIN ROOM</div>
      <div className="input-group">
        <input 
          className="input-box"
          type="text"
          placeholder="USERNAME"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input 
          className="input-box" 
          type="text" 
          placeholder="ROOM CODE" 
          onChange={(event) => setRoomCode(event.target.value)}
        />
      </div>
      <button className="create-room-modal-button" onClick={joinRoom}>
        JOIN ROOM
      </button>
    </div>
  )
}

export default JoinRoom