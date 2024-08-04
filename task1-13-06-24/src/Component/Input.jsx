import React from 'react'

const Input = (props) => {

  return (
    <div>
      <input style={{
        width: "200px",
        height: "10px",
        padding: "10px",
        margin: "5px",
        border:"1px solid black",
        borderRadius: "5px",
        display: "flex"
      }}
        type={props.type} placeholder={props.placeholder}></input>
    </div>
  )
}

export default Input;
