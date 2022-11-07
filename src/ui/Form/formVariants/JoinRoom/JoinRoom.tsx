import { useCallback, useState } from "react";
import { ROOM } from "../../../../constants/endpoints";
import { socket } from "../../../../services";
import { GameEvent } from "../../../../types";
import '../form-common.css';
import "./join-room.css";

const joinExistingRoom = (username: string, roomCode: string) => {
  socket.emit(GameEvent.JOIN_ROOM, {
    playerName: username,
    code: roomCode
  });

  const joinedRoomListener = (newRoomCode: string) => {
    window.location.href = ROOM + `/${newRoomCode}`;
    socket.removeListener(GameEvent.JOINED_ROOM, joinedRoomListener);
  };
  socket.on(GameEvent.JOINED_ROOM, joinedRoomListener);
};

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