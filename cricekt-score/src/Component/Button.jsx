import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick} className={props.className} type="submit">{props.label}</button>
    </div>
  )
}

export default Button;
