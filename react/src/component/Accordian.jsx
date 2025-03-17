import { useState } from "react"



const data = [
    {title:'section 1',description:"hi this is the section 1"},
    {title:'section 2',description:"hi this is the section 2"},
    {title:'section 3',description:"hi this is the section 3"},
    {title:'section 4',description:"hi this is the section 4"},
]

export const Accordian = ()=>{

    const [activeIndex,setActiveIndex] = useState(null)

    const toggle = (index)=>{

        setActiveIndex(activeIndex==index?null:index)

    }


    return<>
    <h1>hi i m Accordian</h1>
    <div>
        {
            data.map((item,index)=>(
                <div key={index}>
                <button onClick={()=>toggle(index)}>{item.title}</button>
                {activeIndex==index && <p>{item.description}</p>}

                </div>
            ))

        }
    </div>
    </>
}