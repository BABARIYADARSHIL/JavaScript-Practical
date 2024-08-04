import React from 'react'

const Input = (props) => {
  return (
    <div>
       <input onChange={props.onChange} style={props.style} type={props.type} className= {props.className}  placeholder={ props.placeholder} value={props.value} />
    </div>
  )
}

export default Input
