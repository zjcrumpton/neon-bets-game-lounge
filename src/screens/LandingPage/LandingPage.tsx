import { useCallback, useState } from 'react';
import Button from '../../ui/Button/Button';
import neonBets from '../../assets/NeonBets.svg';
import { socket } from '../../services';
import './landing-page.css';
import { 
  CreateRoom,
  JoinRoom,
} from '../../ui/Form';
import { useReactQuerySubscription } from '../../services/querySubscription';

const FOOTER_COPY = 'a game by Void Studios, 2022';
const JOIN_ROOM_BUTTON_COPY = 'JOIN ROOM';
const CREATE_ROOM_BUTTON_COPY = 'CREATE ROOM';

enum LandingState {
  JOIN_ROOM,
  CREATE_ROOM,
  DEFAULT,
}

const LandingPage = () => {
  
  const [landingState, setLandingState] = useState<LandingState>(LandingState.DEFAULT);

  const selectJoin = useCallback(() => {
    setLandingState(LandingState.JOIN_ROOM);
  }, []);

  const selectCreate = useCallback(() => {
    setLandingState(LandingState.CREATE_ROOM);
  }, []);

  const resetLandingState = useCallback(() => {
    setLandingState(LandingState.DEFAULT);
  }, []);

  return (
    <div className="nb-landing-page">
      <div className="nb-landing-page-main">
        <object className="nb-landing-page-logo" data={neonBets} />
        { landingState === LandingState.DEFAULT && (
          <div className="nb-landing-page-btn-container"> 
            <Button 
              className="nb-join-room-btn"
              text={JOIN_ROOM_BUTTON_COPY}
              onClick={selectJoin} 
            />
            <Button 
              className="nb-create-room-btn" 
              text={CREATE_ROOM_BUTTON_COPY}
              onClick={selectCreate} 
            />
          </div>
        )}
      </div>
      { landingState !== LandingState.DEFAULT && (
        <div className="nb-landing-page-form-container">
          { landingState === LandingState.CREATE_ROOM && (
            <CreateRoom 
              onExit={resetLandingState}
            />
          )}
          { landingState === LandingState.JOIN_ROOM && (
            <JoinRoom 
              onExit={resetLandingState} 
            />
          )}
        </div>
      )}
      <div 
        className="nb-landing-page-footer">
          {FOOTER_COPY}
      </div>
    </div>
  )
}

export default LandingPage;
