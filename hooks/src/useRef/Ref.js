import React, {useRef , useState} from "react";


export default function Ref (){
    const [term , setTerm] = useState("")
    const inputRef = useRef(null)
    const onClick = () => { 
        inputRef.current.value =  setTerm(inputRef.current.value)

       
    }

    return(
        <div>
            <h1>{term}</h1>
            <input  type="text" placeholder="name" ref = {inputRef}/>
           <button onClick = {onClick}>Change</button>
        </div>
    )
}