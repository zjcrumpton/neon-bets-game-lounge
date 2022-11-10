import './player-info.css';

interface PlayerCardProps {
  name: string,
  money: number,
  color?: string,
}

const PlayerCard = ({
  name,
  money,
  color,
}: PlayerCardProps) => {
  return (
    <div className='nb-poker-player-card'>
      <div className='nb-poker-player-card-color' style={{backgroundColor: color ? color : 'rgba(251, 55, 174, 0.28)'}}/>
      <div className='nb-poker-player-card-info'>
        <div className='nb-poker-player-card-name'>
          {name}
        </div>
        <div className='nb-poker-player-card-money'>
          ${money}
        </div>
      </div>
    </div>
  )
}

export default PlayerCard