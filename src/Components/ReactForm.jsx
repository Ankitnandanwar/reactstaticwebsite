import React,{useState} from 'react'
import './style.css'

const ReactForm = () => {

    const [name,setName] = useState("")
    const [fullname, setfullName] = useState("")
    const [lastname,setLastName] = useState("")
    const[fullLastname, setfullLastName] = useState("")


    
    const handleName = (event) =>{
        setName(event.target.value)
    }

    const handleLastName = (event)=>{
        setLastName(event.target.value)
    }

    const SubmitForm = (e) =>{
        e.preventDefault()
        setfullName(name)
        setfullLastName(lastname)
    }




  return (
    <div className='Container'>
        <form onSubmit={SubmitForm} className='formBox'>
            <h1>Hello {fullname} {fullLastname}</h1>
            <input type="text" placeholder='Enter Your Name'  value={name} onChange={handleName}/><br/>
            <input type="text" placeholder='Enter Your LastName' value={lastname} onChange={handleLastName}/><br/>
            <button type='submit'>Click Here</button>
        </form>
    </div>
  )
}

export default ReactForm