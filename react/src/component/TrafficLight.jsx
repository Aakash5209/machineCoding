import { useState,useEffect } from "react"
import './traffic.css'
export const TrafficLight = () =>{

    const [currentLight, setCurrentLight] = useState('red')

    useEffect(()=>{
       
      const interval =  setInterval(()=>{
            setCurrentLight((prev)=>{
                if(prev ==='red') return 'yellow'
                if(prev=='yellow') return 'green'
                return 'red'
            })
          

        },2000)

        return ()=>clearInterval(interval)

    },[])




    return<>
    <h1>hi this is traffic light</h1>
    <div className="signal-container">

        <div className={`circle ${currentLight=='red'?'red':''} `}></div>
        <div className={`circle ${currentLight=='yellow'?'yellow':''} `}></div>
        <div className={`circle ${currentLight=='green'?'green':''} `}></div>
        

    </div>
    </>

}