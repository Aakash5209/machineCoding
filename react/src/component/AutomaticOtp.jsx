import { useEffect, useState } from "react"


export const AutomaticOtp = ()=>{

    const [otp,setOtp] = useState('')
    const [time,setTime] = useState(20)

    const generateOtp = ()=>{
        const newOtp = Math.floor((Math.random()*9000)+1000)
        setOtp(newOtp)
    }

    useEffect(()=>{
        generateOtp()

       let timer1 = setInterval(()=>{
            generateOtp()

            setTime(20)


        },20000)

       let timer2 = setInterval(()=>{

            setTime((prev)=>prev>0?prev-1:prev)

        },1000)

        return ()=>{
            console.log("clear resources")
            clearInterval(timer1)
            clearInterval(timer2)
        }

    },[])



    return <>
    <h1>Automatic Otp</h1>
    <h2>Otp is  {otp}</h2>
    <h3>New Otp in : {time} </h3>
    </>
}