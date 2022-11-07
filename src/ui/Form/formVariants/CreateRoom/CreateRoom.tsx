import { useCallback, useState } from 'react';
import '../form-common.css';
import { socket } from '../../../../services';
import { GameEvent } from '../../../../types';
import {  } from 'react-router-dom';
import './create-room.css';
import { ROOM } from '../../../../constants/endpoints';
import { Game } from '../../../../types/Game';

interface SelectGameData {
  roomCode: string,
  game: Game,
}

const createNewRoom = (username: string, roomName: string, customRoomCode?: string) => {
  if (username) {
    socket.emit(GameEvent.NEW_ROOM, {
      playerName: username,
      roomName,
      roomCode: customRoomCode,
    });

    const joinNewRoom = (newRoomCode: string) => {
      socket.emit(GameEvent.SELECT_GAME, {
        roomCode: newRoomCode,
        game: Game.POKER,
      });
      socket.removeListener(GameEvent.ROOM_CREATED, joinNewRoom);
      window.location.href = ROOM + `/${newRoomCode}`;
    }

    socket.on(GameEvent.ROOM_CREATED, joinNewRoom);
  }
}

interface CreateRoomProps {
  onExit: () => void,
}

const CreateRoom = ({
  onExit,
}: CreateRoomProps) => {
  const [username, setUsername] = useState<string>('');
  const [roomName, setRoomName] = useState<string>('');
  const [customCode, setCustomCode] = useState<string>('');

  const createRoom = useCallback(() => {
    createNewRoom(username, roomName, customCode);
  }, [username, roomName, customCode]);

  return (
    <div className="nb-create-room">
      <div className="nb-form-header">
        <div className="nb-form-title">CREATE ROOM</div>
        <div className="nb-form-exit" onClick={onExit}>X</div>
      </div>
      <div className="nb-form-input-group">
        <input 
          className="nb-form-input-box"
          type="text"
          value={username}
          placeholder="USERNAME"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input 
          className="nb-form-input-box"
          type="text"
          value={roomName} 
          placeholder="ROOM NAME"
          onChange={(event) => setRoomName(event.target.value)}
        />
        <input 
          className="nb-form-input-box" 
          type="text" 
          value={customCode} 
          placeholder="CUSTOM CODE"
          onChange={(event) => setCustomCode(event.target.value)}
        />
      </div>
      <button className="nb-form-success-button" onClick={createRoom}>
        CREATE ROOM
      </button>
    </div>
  )
}

export default CreateRoom;
