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
    const [teamOneScore, setTeamOneScore] = useState(null);
    const [teamTwoScore, setTeamTwoScore] = useState(null);
    const [currentTeam, setCurrentTeam] = useState(1);

    const HandelInput = (index, value) => {
        const temp = [...inputs];
        temp[index] = Number(value);
        setInputs(temp);

    }
    const handleButtonCount = (value, isExtra = false) => {
        if (gameOver) {
            alert('Match is over');
            return;
        }
        const newCount = count + value
        setCount(newCount);

        if (currentBall < 6 || isExtra) {
            const temp = [...inputs];
            if (!isExtra) {
                temp[currentBall] = value;
                setInputs(temp);
                setCurrentBall(currentBall + 1);
                if (currentBall === 5) {
                    setOverComplete(true);
                    completeOver(temp, newCount);
                }
            } else {
                temp[currentBall] += value;
                setInputs(temp);
                
            }
        } else {
            alert('Over is complete');
        }
    }
    const completeOver = (temp, newCount) => {
        setOvers([...overs, temp]);
        setInputs(Array(6).fill(0));
        setCurrentBall(0);
        setOverComplete(false);

        if (currentTeam === 1  && overs.length + 1 >= 2) {
            setTeamOneScore(newCount);
            setCurrentTeam(2);
            restGame();
        } else if(currentTeam === 2 && overs.length + 1 >= 2){
            setTeamTwoScore(newCount);
            setGameOver(true);

        }
    }

    const HandelButtonCountWicket = () => {
        if (currentBall < 12 && wicket < 10) {
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

    const restGame = () =>{
        setCount(0);
        setWicket(0);
        setInputs(Array(6).fill(0));
        setCurrentBall(0);
        setOvers([]);
        setOverComplete(false);

    }

    return (
        <>
            <div className="container mt-5">
                <form className='my-2'>
                    <div className='d-flex justify-content-center p-2'>
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
                        onClick={() => handleButtonCount(1, true)}
                        className="btn btn-primary mx-2"
                        label="Wide Ball"
                    />
                    <Button
                        onClick={() => handleButtonCount(1, true)}
                        className="btn btn-primary mx-2"
                        label="No Ball"
                    />
                </div>
                <div className="mt-5">
                    <h1>Overs:</h1>
                    {overs.map((over, index) => (
                        <div key={index}>
                            <h2>Over {index + 1}: {over.reduce((acc, ball) => acc + ball, 0)}</h2>
                        </div>
                    ))}
                </div>
                <h2>team 1 scoer is {teamOneScore}</h2>
                <h2>team 2 scoer is {teamTwoScore}</h2>
                {gameOver && (
                    <h1>
                        winner : {teamOneScore > teamTwoScore ? 'Team 1': 'Team 2'}
                    </h1>
                )

                }
            </div>
        </>
    )

}

export default Home;
