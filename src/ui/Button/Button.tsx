import React from 'react'
import "./button.css"

export interface ButtonProps {
  text: string,
  onClick: (event: React.MouseEvent<HTMLElement>) => void,
  className?: string,
  textClassName?: string,
}

const Button = ({
  text,
  className,
  textClassName,
  onClick
}: ButtonProps) => {
  return (
    <div className={`default-button ${className}`} onClick={onClick}>
      <div className={textClassName}>
        {text}
      </div>
    </div>
  )
}

export default Button