import { useEffect, useState } from "react"

export const Stopwatch = ()=>{

    const [time,setTime] = useState(0)

    const [isRunning,setIsRunning] = useState(false)

    useEffect(()=>{
        console.log("useEffcet is fire")
        let timerId;

      if(isRunning){

         timerId = setInterval(()=>{
            setTime((prev)=>prev+10)
        },10)

      }
      else{
        clearInterval(timerId)

      }

      return ()=>clearInterval(timerId)

    },[isRunning])

    const formatTime = (time)=>{
        const ms =` 0${(Math.floor( time%1000))/10}`.slice(-2)
        const sec =`0${Math.floor((time/1000)%60)}`.slice(-2)
        const min =`0${Math.floor((time/60000)%60)}`.slice(-2)

        return `${min} : ${sec} : ${ms}` 
    }


    const handleStart = ()=>{
        setIsRunning(true)

    } 

    console.log(isRunning)




    return <>
    <h1>hi i m stop wtach</h1>
    <h2>current time  {formatTime(time)}</h2>
    <button onClick={handleStart}>Start</button>
    <button onClick={()=>setIsRunning(false)}>Stop</button>
    </>
}