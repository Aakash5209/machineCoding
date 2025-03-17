import { useEffect, useState } from "react"

const Child1 = ({school})=>{

    const [temp,settemp] = useState(0)

    // settemp(temp+1)

    useEffect(()=>{
        console.log("i ,m from temp useeffect")
    },[temp])


    
    return<>

    <h1>hey i m {school} </h1>
    <h2>temp value -{temp}</h2>
    <button onClick={()=>settemp(temp+2)}>add temp</button>
    </>
}
export default Child1