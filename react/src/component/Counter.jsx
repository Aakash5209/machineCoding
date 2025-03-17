import { useEffect, useState } from "react"



export const Counter = ()=>{

    const [count,setCount] = useState(()=>{
        const saveCount = localStorage.getItem('countVlaue')
        return saveCount?parseInt(saveCount,10):0

    })


    useEffect(()=>{
        localStorage.setItem('countVlaue',count)
        console.log("i m from count useeffect")



    },[])

    const handleAdd = ()=>{
        setCount(count+1)
       
    }

    const handleDec= ()=>{
        setCount(count-1)
   
    }




    return<>
    <h1>hey i m counter</h1>
    <h2> Counter- {count}</h2>
    <button onClick={handleAdd}>Increment</button>
    <button onClick={handleDec}>Decrement</button>
    </>
}