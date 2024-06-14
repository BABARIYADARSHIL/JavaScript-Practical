import React from 'react'

const Option = (props) => {
  return (
    <select  style={{border:"1px solid black", margin:"5px",padding:"5px",width:"220px"}}>
      {props.data.map((item) => {
        return <option style={props.style} key={item.value}>{item.label}</option>
      })}
    </select>
  )
}
export default Option;
