import { useCallback, useEffect, useState } from 'react';
import { socket } from '../../../../services';
import { GameEvent } from '../../../../types';
import { ROOM } from '../../../../constants/endpoints';
import { Game } from '../../../../types/Game';
import { Room } from '../../../../models/room';
import { queryClient } from '../../../../main';
import { NeonQueryKey } from '../../../../services/QueryKey';
import '../form-common.css';
import './create-room.css';
import { Updater } from '@tanstack/react-query';
import { useRoomData } from '../../../../services/lounge';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface SelectGameData {
  roomCode: string,
  game: Game,
}

const createNewRoom = (navigate: NavigateFunction, username: string, roomName: string, customRoomCode?: string) => {
  if (username) {
    socket.emit(GameEvent.NEW_ROOM, {
      playerName: username,
      roomName,
      roomCode: customRoomCode,
    });

    const joinNewRoom = async (roomPayload: Room) => {
      console.log("@@ CREATE ROOM EVENT @@", JSON.stringify(roomPayload));
      const { code } = roomPayload;

      socket.emit(GameEvent.SELECT_GAME, {
        roomCode: code,
        game: Game.POKER,
      });

      queryClient.setQueryData<Room>(
        [NeonQueryKey.ROOM_DATA],
        roomPayload,
      )
      queryClient.invalidateQueries([NeonQueryKey.ROOM_DATA]);

      socket.removeListener(GameEvent.ROOM_CREATED, joinNewRoom);
      navigate("/room/" + code);
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
  const navigate = useNavigate();
  const roomData = useRoomData();

  useEffect(() => {
    console.log("@@ CREATE ROOM DATA @@", roomData)
  }, [roomData])

  const createRoom = useCallback(() => {
    createNewRoom(navigate, username, roomName, customCode);
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
