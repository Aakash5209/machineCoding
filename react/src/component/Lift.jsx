import { useState } from 'react'
import './lift.css'


export const Lift = ()=>{

    const [currentFloor,setCurrentFloor] = useState(1)
    const [targetFloor,setTargetFloor] = useState(null)
    const [isMoving,setisMoving] = useState(false)

    const floors = [1,2,3,4,5]

    const moveToFloor = (floor)=>{
        setisMoving(true)
        setTargetFloor(floor)

        const timeToMove = Math.abs(floor- currentFloor)*1000

        setTimeout(()=>{
         setisMoving(false)
         setCurrentFloor(floor)
        },timeToMove)

    }

    return <>
    {/* <h1>hi this is lift</h1> */}
    <div className='elevatorContainer'> 
        <div className='elevatorShaft'>

            <div className='elevator'
            style={{
                bottom: `${(currentFloor-1)*20}%`
            }}
            >

            </div>

        </div>

        <div className='controls'>
            {floors.map((floor)=>(
                <button
                onClick={()=>moveToFloor(floor)}>
                    {`Go to floor ${floor}`}
                </button>
            ))}
        </div>


    </div>

    </>
}