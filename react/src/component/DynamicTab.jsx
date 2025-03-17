import { useState } from "react"



export const DynamicTab = ()=>{

    const[tabs,setTabs] =useState(['Tab 1'])
    const [activetab,setActiveTab] = useState(0)



    const handletab=()=>{
        setTabs([...tabs,`Tab ${tabs.length+1}`])

    }
    const removeTab = ()=>{
        setTabs(tabs.filter((_,i)=>i!==activetab))
        setActiveTab(tabs.length-2)


    }


    return<>
    <button onClick={handletab}>Add tab</button>

    <div>
        {
            tabs.map((tab,index)=>(
                <button onClick={()=>setActiveTab(index)}
                style={{background:activetab===index?'red':'white'}}
                >{tab}</button>
            ))
        }

        <button onClick={removeTab}>Remove Tab</button>
    </div>
    </>
}