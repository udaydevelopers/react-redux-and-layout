import React, {useState, useEffect} from 'react'
import './App.css'
import InputTimer from './inputTimer';
import ShowTimer from './ShowTimer';

const App = () => {
    const[isStart, setIsStart] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timerId, setTimerId] = useState("");
    

    const handleStart = () => {
        if(hours === 0 && minutes === 0 && seconds ===0){
            alert('Invalid input for timer')
        }else{
            setIsStart(true)
        }
        
    }
    const handleResue = () => {
        setIsPaused(false);
        runTimer(seconds, minutes, hours, timerId)
    }
    const handlePause = () => {
        setIsPaused(true);
        clearInterval(timerId)
    }

    const handleReset = () => {
        setIsStart(false);
        resetTimer()
    }
    const resetTimer = () => {
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        clearInterval(timerId)
    }

    const handleInput = (e) => {
        //console.log(e.target.id, e.target.value);
        const id = e.target.id;
        const value = parseInt(e.target.value);
        if(id === "hours"){
            setHours(value);
        }else if(id === "minutes"){
            setMinutes(value);
        }else{
            setSeconds(value);
        }
    }
    //console.log(hours, minutes, seconds);
    const runTimer = (sec, min, hrs, tid) => {
        if(sec > 0){
            setSeconds((s)=> s -1);
        }else if(sec === 0 && min > 0){
            setMinutes((m)=>m-1);
            setSeconds(59)
        }else{
            setHours((h)=>h-1);
            setMinutes(59);
            setSeconds(59);
        }
        if(hrs === 0 && min === 0 && sec === 0){
            resetTimer();
            alert('Timer finished!')
            setIsStart(false)
        }
    }

    useEffect(()=>{
        let tid;
        if(isStart){
            tid = setInterval(()=>{
            runTimer(seconds, minutes, hours, tid);
            },1000);
        }
        setTimerId(tid);
        return () => clearInterval(tid)
    },[isStart, hours, minutes, seconds]);

  return (
    <div className='style-div'>
        <h1>Countdown Timer</h1>
        {!isStart &&  <InputTimer 
        handleInput={handleInput} 
        handleStart={handleStart}/>
        }
        {isStart && <ShowTimer 
        hours={hours} 
        minutes={minutes} 
        seconds={seconds} 
        isPaused={isPaused} 
        handlePause={handlePause} 
        handleResue={handleResue} 
        handleReset={handleReset}/>
        }
    </div>

  )
}

export default App