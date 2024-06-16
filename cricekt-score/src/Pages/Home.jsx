import React, { useState } from 'react'
import Button from '../Component/Button'
import Input from '../Component/Input'

const Home = () => {
    const [count, setCount] = useState(0);
    const [wicket, setWicket] = useState(0);
    const [inputs, setInputs] = useState(Array(6).fill(0));
    const [currentBall, setCurrentBall] = useState(0);
    const [overs, setOvers] = useState([]);
    const [overComplete, setOverComplete] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    const HandelInput = (index, value) => {
        const temp = [...inputs];
        temp[index] = Number(value);
        setInputs(temp);

    }
    const handleButtonCount = (value) => {
        if (gameOver) {
            alert('Match is over');
            return;
          }
        if (currentBall < 6) {
            const newCount = count + value
            setCount(newCount);
            const temp = [...inputs];
            temp[currentBall] = value;
            setInputs(temp);
            setCurrentBall(currentBall + 1);
            if (currentBall === 5) {
                setOverComplete(true);
                completeOver(temp, newCount);
            }
        } else {
            alert("over is finish")
        }
    }
    const completeOver = (temp, newCount) => {
        if (overs.length+1 < 2) {
            setOvers([...overs, temp]);
            setInputs(Array(6).fill(0));
            setCurrentBall(0);
            setOverComplete(false);
        } else {
            alert("2 over is compeleted")
            setOvers([...overs, temp]);
            setOverComplete(true);
            setGameOver(true);
            
        }
    }


    const HandelButtonCountWicket = () => {
        if (currentBall< 12 && wicket < 10) {
            setWicket(wicket + 1)
            if (currentBall < 6) {
                setCurrentBall(currentBall + 1);
                if (currentBall === 5) {
                    setOverComplete(true);
                    completeOver(inputs, count);
                }
            }

        } else if (wicket === 10) {
            alert("Matchh is over")
            setGameOver(true);
        }
    }
    return (
        <>


            <div className="container mt-5">
                <form className='my-2'>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {inputs.map((input, index) => {
                            return (<Input
                                key={index}
                                value={input}
                                onChange={(e) => HandelInput(index, e.target.value)}
                                style={{ height: "10px", width: "50px" }}
                                type="number"
                                className="form-control-sm"
                                readOnly />)
                        })}

                    </div>
                </form>

                <div className="d-flex justify-content-center align-items-center ">
                    <h2 className='m-5'> Total Wicket: {wicket}</h2>
                    <h2 className='m-5'> Total Score:{count}</h2>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <Button

                            onClick={() => handleButtonCount(1)}
                            className="btn btn-primary mx-2"
                            label="1"
                        />
                        <Button
                            onClick={() => handleButtonCount(2)}
                            className="btn btn-primary mx-2"
                            label="2"
                        />
                        <Button
                            onClick={() => handleButtonCount(3)}
                            className="btn btn-primary mx-2"
                            label="3"
                        />
                        <Button
                            onClick={() => handleButtonCount(4)}
                            className="btn btn-primary mx-2"
                            label="4"
                        />
                        <Button
                            onClick={() => handleButtonCount(6)}
                            className="btn btn-primary mx-2"
                            label="6"
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <Button
                        onClick={() => handleButtonCount(0)}
                        className="btn btn-primary mx-2"
                        label="Dot Ball"
                    />
                    <Button
                        onClick={HandelButtonCountWicket}
                        className="btn btn-primary mx-2"
                        label="Wicket"
                    />
                    <Button
                        onClick={() => handleButtonCount(1)}
                        className="btn btn-primary mx-2"
                        label="Wide Ball"
                    />
                    <Button
                        onClick={() => handleButtonCount(1)}
                        className="btn btn-primary mx-2"
                        label="No Ball"
                    />
                </div>
                {/* {overComplete && (
                    <div className="d-flex justify-content-center align-items-center mt-3">
                        <h3>Over is complete</h3>
                    </div>
                )} */}
                <div className="mt-5">
                    {/* {{completeOver}} */}
                    <h1>Overs:</h1>
                    {overs.map((over, index) => (
                        <div key={index}>
                            <h2>Over {index + 1}: {over.reduce((acc, ball) => acc + ball, 0)}</h2>
                        </div>
                    ))}
                </div>
                <h2>team 1 scoer is {count}</h2>
            </div>
        </>
    )

}

export default Home
