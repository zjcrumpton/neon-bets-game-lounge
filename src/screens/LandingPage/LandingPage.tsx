import Button from '../../ui/Button/Button';
import neonBets from './res/NeonBets.svg';
import { socket } from '../../services';
import { useCallback, useMemo, useState } from 'react';
import { CreateRoom, JoinRoom } from '../Modals/variants';
import './landing-page.css';
import { useRoomListQuery } from '../../services/serverBrowser';
import { GameEvent } from '../../types';

socket.on('connection', () => {
  console.log('connected');
});

enum ModalType {
  CREATE_ROOM,
  JOIN_ROOM,
}

const RoomModalMap = {
  [ModalType.JOIN_ROOM]: JoinRoom,
  [ModalType.CREATE_ROOM]: CreateRoom,
};

const FOOTER_COPY = 'a game by Void Studios, 2022';
const JOIN_ROOM_BUTTON_COPY = 'JOIN ROOM';
const CREATE_ROOM_BUTTON_COPY = 'CREATE ROOM';

const LandingPage = () => {
  const [modalSelection, setModalSelection] = useState<ModalType>();

  const selectJoin = useCallback(() => {
    setModalSelection(ModalType.JOIN_ROOM);
  }, []);

  const selectCreate = useCallback(() => {
    socket.emit(GameEvent.NEW_ROOM, {
      playerName: 'Chad',
    });
    // setModalSelection(ModalType.CREATE_ROOM);
  }, []);

  const Modal = useMemo(() => modalSelection ? RoomModalMap[modalSelection] : () => null, [modalSelection]);

  return (
    <div className="landing-page">
      <object className="logo" data={neonBets} />
      {!modalSelection && (
        <div className="button-container">
          <Button className="join-room-button" text={JOIN_ROOM_BUTTON_COPY} onClick={selectJoin} />
          <Button className="create-room-button" text={CREATE_ROOM_BUTTON_COPY} onClick={selectCreate} />
        </div>
      )}
      <Modal />
      <div className="landing-page-signature">{FOOTER_COPY}</div>
    </div>
  )
}

export default LandingPage;
