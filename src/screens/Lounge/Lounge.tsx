import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import LoungeUser from "./LoungeUser";
import { useRoomData } from "../../services/lounge";
import './lounge.css';


const colors = ["red", "blue", "green", "yellow", "pink", "purple", "orange"];

const Lounge = () => {
  const {data: roomData} = useRoomData();
  const location = useLocation();
  
  const slug = useMemo(() => {
    const slugMatch = location.pathname.match(/\/room\/(.+)/)
    return slugMatch ? slugMatch[1] : undefined;
  }, [location]);

  const renderPlayers = useMemo(() => {
    const playerData = roomData?.players;
    if (!playerData) return null;

    return playerData.map((player) => (
      <LoungeUser 
        name={player.name} 
        color={colors[Math.floor(Math.random() * colors.length)]} 
        key={player.id}/>
      ))
  }, [roomData]);

  return (
    <div className="nb-lounge">
      <div className="nb-side-bar">

      </div>
      <div className="nb-game-screen">
        <button>Select Game</button>
      </div>
      <div className="nb-user-group">
        {renderPlayers}
      </div>
    </div>
  )
}

export default Lounge