import React , {useState} from 'react'


const State = () =>{


const [count ,setCount] = useState(0)

const add = () => {
    setCount(count + 1)
}



return (
<div>
    <h1>{count}</h1>
    <button onClick={add}>Increment</button>
</div>
)
}

export default State