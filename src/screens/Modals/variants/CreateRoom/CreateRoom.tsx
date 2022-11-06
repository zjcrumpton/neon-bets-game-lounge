import { FC, useCallback, useState } from 'react';
import './create-room.css';

const createNewRoom = (username: string, roomName: string, customRoomCode?: string) => {
  const roomConfig = {
    username,
    roomName,
    customRoomCode,
  };
  console.log(JSON.stringify(roomConfig));
}


const CreateRoom: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [roomName, setRoomName] = useState<string>('');
  const [customCode, setCustomCode] = useState<string>('');

  const createRoom = useCallback(() => {
    createNewRoom(username, roomName, customCode);
  }, [username, roomName, customCode]);

  return (
    <div className="create-room-modal">
      <div className="create-room-modal-title">CREATE ROOM</div>
      <div className="input-group">
        <input 
          className="input-box"
          type="text"
          value={username}
          placeholder="USERNAME"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input 
          className="input-box"
          type="text"
          value={roomName} 
          placeholder="ROOM NAME"
          onChange={(event) => setRoomName(event.target.value)}
        />
        <input 
          className="input-box" 
          type="text" 
          value={customCode} 
          placeholder="CUSTOM CODE"
          onChange={(event) => setCustomCode(event.target.value)}
        />
      </div>
      <button className="create-room-modal-button" onClick={createRoom}>
        CREATE ROOM
      </button>
    </div>
  )
}

export default CreateRoom;
