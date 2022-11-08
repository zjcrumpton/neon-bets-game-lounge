import "./lounge-user.css";

interface LoungeUserProps {
  name: string,
  color?: string,
}

const LoungeUser = ({
  name,
  color,
}: LoungeUserProps) => {
  return (
    <div className="nb-lounge-user">
      <div className="nb-lounge-user-bubble" style={{backgroundColor: color ? color : 'blue'}} />
      <div className="nb-lounge-user-name" >{name}</div>
    </div>
  )
}

export default LoungeUser