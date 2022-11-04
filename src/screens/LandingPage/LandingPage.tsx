import React from 'react'
import Button from '../../ui/Button/Button';
import neonBets from './res/NeonBets.svg';
import './landing-page.css';


const LandingPage = () => {



  return (
    <div className="landing-page">
      <object className="logo" data={neonBets} />
      <div className="button-container"> 
        <Button className="join-room-button" text="JOIN ROOM" onClick={() => console.log("Joining Room")} />
        <Button className="create-room-button" text="CREATE ROOM" onClick={() => console.log("Creating Room")} />
      </div>
      <div className="landing-page-signature">a game by Void Studios, 2022</div>
    </div>
  )
}

export default LandingPage