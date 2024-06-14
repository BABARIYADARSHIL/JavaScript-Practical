import React from 'react'

const Button = (props) => {
  
  return (
    <div>
      <button  style={props.style} onClick={props.onClick} type={props.info}>{props.label}</button>
    </div>
  )
}

export default Button
