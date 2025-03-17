import { useState } from "react"
import './modal.css'

export const Modal = ()=>{

    const [isOpen,setIsOpen] = useState(false)

    const handelOpen = ()=>{
        setIsOpen(true)
        console.log('satae change')
    }
    console.log('satae change',isOpen)

    return<>
    {/* <h1>hi i m modal</h1> */}

    <div className="modalConatiner">
        <button onClick={handelOpen}>open Modal</button>

        {
            isOpen && (
                <div className="modalOverlay" onClick={()=>setIsOpen(false)}>

                    <div className="modal" onClick={(e)=>e.stopPropagation()}>
                        <h2>hi i m the modal </h2>
                        <p>thanks for opening me </p>
                        <button onClick={()=>setIsOpen(false)}>close modal</button>
                    </div>

                </div>
            )
        }


    </div>
    </>
}