import { useCallback, useState } from 'react';
import './create-room.css';

const createNewRoom = (username: string, roomName: string, customRoomCode?: string) => {
  const roomConfig = {
    username,
    roomName,
    customRoomCode,
  };
  console.log(JSON.stringify(roomConfig));
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
      <div>
        <div className="nb-create-room-title">CREATE ROOM</div>
        <div className="nb-create-room-exit">X</div>
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
