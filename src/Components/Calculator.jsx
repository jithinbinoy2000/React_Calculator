//import React from 'react'
import { useEffect, useState } from 'react'
import './calculator.css'
function Calculator() {
    const [userInput, setUserInput] = useState("0");
    const [result, setResult] = useState('')
    const [history, setHistory] = useState([])
    const upadateUserInput = (e) => {
        const value = e.target.innerText;
        setUserInput((userInput) => userInput + value)

    }
    const calculateInput = () => {
        try {
            const calculationResult = eval(userInput).toString();
            setResult(calculationResult);
            setHistory((phistory) => [
                ...phistory,
                { input: userInput, res: calculationResult },
            ]);
        } catch (error) {
            setResult('error' + error);
        }
        setUserInput('');
        setResult('')// Clear input after calculation
    };
    const resetResult = () => {
        setUserInput([])
        setResult([])
        setHistory([])
    }

    const handleKeyDown = (e) => {
        const key = e.key
        if (key === "Enter") {
            calculateInput()
        }
        if (key >= 0 && key <= 9) {
            ;
            setUserInput((userInput) => userInput + key)

        } else if (key === "/" || key === "*" || key === "-" || key === "+" || key === ".") {
            setUserInput((userInput) => userInput + key)
        } else if (key === "Backspace") {
            e.preventDefault()
            // console.log(userInput.length);     
            if (userInput.length > 0) {
                setUserInput(userInput.slice(0, -1))
            }
        }else if( key ==="Delete"){
            resetResult();
        }
    };

    //key press
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [userInput]);
    return (
        <div>
            <div
                className='container mt-[200px] bg-green-800 bg-opacity-30 backdrop-blur-md rounded-lg'
                style={{ width: "320px", padding: '15px' }} >
                <div style={{ minHeight: '70px', width: '280px', height: 'auto', maxHeight:"150px", overflowY:'auto' }} className='bg-white rounded flex-col text-5xl orbitron-display'>
                    {/* history */}
                    {history ? history.map((data, index) => (
                        <div key={index}>
                            <p className='text-bold text-xl'>{data.input} = {data.res}</p>
                        </div>
                    )) : null}
                    <div className='font-bold text-2xl'>{userInput ? userInput : 0}</div>
                    <div className='font-bold text-lg'>{result}</div>
                </div>
                <div className='UserInput orbitron-display' style={{ width: '290px'  }}>
                    <div className='flex space-x-2 space-y-2'>
                        <div className="btn bg-white cal_input mt-2  hover:bg-slate-100 justify-center  content-center" onClick={() => { resetResult() }} onKeyDown={(e) => console.log(e)
                        }>AC</div>
                        <div className="btn bg-white flex justify-center  content-center cal_input  hover:bg-slate-100" onClick={(e) => upadateUserInput(e)}>%</div>
                        <div className="btn bg-white cal_input mt-2  justify-center  content-center hover:bg-slate-100" onClick={(e) => upadateUserInput(e)}>*</div>
                        <div className="btn bg-white cal_input justify-center  content-center hover:bg-slate-100" onClick={(e) => upadateUserInput(e)}>-</div>


                    </div>
                    <div className='flex space-x-2 space-y-2'>
                        <div className="btn bg-white cal_input mt-2 justify-center  content-center hover:bg-slate-100" onClick={(e) => upadateUserInput(e)}>7</div>
                        <div className="btn bg-white cal_input justify-center  content-center hover:bg-slate-100" onClick={(e) => upadateUserInput(e)}>8</div>
                        <div className="btn bg-white cal_input justify-center  content-center hover:bg-slate-100" onClick={(e) => upadateUserInput(e)}>9</div>
                        <div className="btn bg-white cal_input justify-center  content-center hover:bg-slate-100" onClick={(e) => upadateUserInput(e)}>/</div>
                    </div>
                    <div className='flex space-x-2 space-y-2'>
                        <div className="btn bg-white cal_input mt-2 justify-center  content-center hover:bg-slate-100" onClick={(e) => upadateUserInput(e)}>4</div>
                        <div className="btn bg-white cal_input justify-center  content-center hover:bg-slate-100" onClick={(e) => upadateUserInput(e)}>5</div>
                        <div className="btn bg-white cal_input justify-center  content-center hover:bg-slate-100" onClick={(e) => upadateUserInput(e)}>6</div>
                        <div className="btn bg-white cal_input justify-center  content-center hover:bg-slate-100" onClick={(e) => upadateUserInput(e)}>+</div>
                    </div>
                    <div className='flex space-x-2 space-y-2'>
                        <div className="btn bg-white cal_input mt-2 justify-center  content-center hover:bg-slate-100" onClick={(e) => upadateUserInput(e)}>1</div>
                        <div className="btn bg-white cal_input justify-center  content-center hover:bg-slate-100" onClick={(e) => upadateUserInput(e)}>2</div>
                        <div className="btn bg-white cal_input justify-center  content-center hover:bg-slate-100" onClick={(e) => upadateUserInput(e)}>3</div>
                        <div className="btn bg-white cal_input justify-center  content-center" onClick={() => calculateInput()}>enter</div>
                    </div>
                    <div className='flex space-x-2 space-y-2'>
                        <div className="btn bg-white cal_input mt-2 justify-center  content-center hover:bg-slate-100" style={{ width: '8.5rem' }} onClick={(e) => upadateUserInput(e)}>0</div>
                        <div className="btn bg-white cal_input justify-center  content-center hover:bg-slate-100" onClick={(e) => upadateUserInput(e)}>.</div>
                        <div className="btn bg-white cal_input justify-center  content-center" onClick={() => calculateInput()} style={{ marginTop: '-1rem', height: '5.5rem' }}></div>
                        {/* <div className="btn bg-white cal_input"></div>
            <div className="btn bg-white cal_input">enter</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator