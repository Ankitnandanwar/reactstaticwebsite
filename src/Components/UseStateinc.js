import React from 'react'
import { useState } from 'react'

const UseStateinc = () => {

    const newTime = new Date().toLocaleTimeString()

    const [curtime, setTime] = useState(newTime)

    const UpdateTime = () =>{
        const newCTime = new Date().toLocaleTimeString()
        setTime(newCTime)
    }

  return (
    <div>
        <h1>{curtime}</h1>
        <button onClick={UpdateTime}>GetTime</button>
    </div>
  )
}

export default UseStateinc