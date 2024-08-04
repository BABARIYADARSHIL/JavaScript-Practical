import React from 'react'
import Button from '../Component/Button'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div style={{ height: "20vh", display:"flex" , backgroundColor:"black"}}>
                {/* <ul> */}
                    <p style={{margin:"10px", color:"red"}} ><Link to="/"><Button label="HOME"></Button></Link></p>
                    <p style={{margin:"10px" , color:"red"}}><Link to="/ContacUs"><Button label="ContacUs">ContacUs</Button></Link></p>

                {/* </ul> */}
            
            </div>
        </>
    )
}

export default Header
