import React from 'react'
import Input from '../Component/Input'
import Button from '../Component/Button'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Option from '../Component/Option'
import { Semester } from '../Utils/DropDwon'
// import { Semester } from '../Utils/DropDwon'


const ContacUs = () => {
    const Navigator = useNavigate();
    const HandelHomePage = () => {
        Navigator("/")

    }


    return (
        <>
            <Header />
            <div style={{ height: "60vh", alignContent: "center", backgroundColor:"black"}}>
                <h1 style={{ display: "flex", justifyContent: "center" ,color:"white"}}>ContacUs Page</h1>
                <Input type="text" placeholder="Enter your Name" />
                <Input type="number" placeholder="Enter your Enrollment" />
                <Option style={{ color: "red" }} data={Semester} />
                <Input type="number" placeholder="Enter your PhoneNumber" />
                <Input type="text" placeholder="Enter your Address" />
                <Button style={{ Padding: "10px", margin: "20px", height: "30px", width: "100px" }} onClick={HandelHomePage} label="Submit" />
            </div>
            <Footer />
        </>
    )
}

export default ContacUs;
