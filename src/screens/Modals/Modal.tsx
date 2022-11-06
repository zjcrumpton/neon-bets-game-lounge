import { FC, useMemo } from 'react'
import { JoinRoom, CreateRoom } from './variants'
import { ModalType } from './modal.types'
import './modal.css';

const modalMap: {[key in ModalType]?: FC | undefined} = {
  [ModalType.JOIN_ROOM]: JoinRoom,
  [ModalType.CREATE_ROOM]: CreateRoom,
}

interface ModalProps {
  type: ModalType,
  onExit: () => void,
}

const Modal = ({
  type,
  onExit,
}: ModalProps) => {
  const ModalComp: FC | undefined = useMemo(() => modalMap[type], [type]);

  return (
    type === ModalType.DEFAULT ? 
      null
      : (
        <div className="nb-modal" data-modal={type}>
          <button className="nb-modal-exit" onClick={onExit}>X</button>
          {ModalComp && <ModalComp />}
        </div>
      )
  )
}

export default Modal