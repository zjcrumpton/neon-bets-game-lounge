import React, { useCallback, useState } from 'react'
import Button from '../../ui/Button/Button';
import neonBets from './res/NeonBets.svg';
import './landing-page.css';
import Modal from '../Modals/Modal';
import { ModalType } from '../Modals/modal.types';
import Card from '../../ui/Card/Card';
import { CardSuit, CardValue } from '../../ui/Card/card.types';



const LandingPage = () => {
  const [modalState, setModalState] = useState<ModalType>(ModalType.DEFAULT);

  return (
    <div className="landing-page">
        {/* <div className='nb-landing-page-card-group'>
          <Card className="nb-landing-page-card" value={CardValue.ACE} suit={CardSuit.HEARTS} />
          <Card className="nb-landing-page-card" value={CardValue.TWO} suit={CardSuit.SPADES} />
          <Card className="nb-landing-page-card" showBackOverride value={CardValue.THREE} suit={CardSuit.DIAMONDS} />
          <Card className="nb-landing-page-card" value={CardValue.FOUR} suit={CardSuit.CLUBS} />
          <Card className="nb-landing-page-card" value={CardValue.FIVE} suit={CardSuit.HEARTS} />
          <Card className="nb-landing-page-card" value={CardValue.SIX} suit={CardSuit.SPADES} />
          <Card className="nb-landing-page-card" value={CardValue.SEVEN} suit={CardSuit.DIAMONDS} />
          <Card className="nb-landing-page-card" value={CardValue.EIGHT} suit={CardSuit.CLUBS} />
          <Card className="nb-landing-page-card" value={CardValue.NINE} suit={CardSuit.HEARTS} />
          <Card className="nb-landing-page-card" value={CardValue.TEN} suit={CardSuit.SPADES} />
        </div> */}


        <div className="nb-landing-page-main">
          <object className="logo" data={neonBets} />
          { modalState === ModalType.DEFAULT && (
            <div className="button-container"> 
              <Button 
                className="join-room-button"
                text="JOIN ROOM"
                onClick={() => setModalState(ModalType.JOIN_ROOM)} 
              />
              <Button 
                className="create-room-button" 
                text="CREATE ROOM" 
                onClick={() => setModalState(ModalType.CREATE_ROOM)} 
              />
            </div>
          )}
        </div>
      <Modal type={modalState} onExit={() => setModalState(ModalType.DEFAULT)} />
      <div className="landing-page-signature">an application by Void Studios, 2022</div>
    </div>
  )
}

export default LandingPage