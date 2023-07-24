import axios from "axios"
import React, {useEffect , useState} from "react"
 

export default function Effect(){

    const [data , setData] = useState("")

    useEffect (() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
             .then((response) => {
                setData(response.data[0].email)
                console.log("API was called")
               
                

             })
    }, [])
    return(
        <div>
            <h1>Hello world {data}</h1>
            </div>
    )

}