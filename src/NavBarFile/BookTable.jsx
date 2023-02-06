import React,{useState} from 'react'

const BookTable = () => {

  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setmessage] = useState("")

  const [allEntry, setAllEntry] = useState([])

  const submitForm = (e) =>{
    e.preventDefault()

    const newEntry = {fname:firstname, lname:lastname, email:email, messg:message}

    setAllEntry([...allEntry, newEntry])
    console.log(allEntry)
  }

  
  return (
    <>
    <div className='BookTable'>
        <div className="col-md-4 offset-md-1 booktable2">
            <h1>BOOK A TABLE</h1>
            <p>Whatever the occasion, we’re certain that you can make it special at CAMPOS.</p>
            <form action="" className='booktableform' onSubmit={submitForm}>
              <label htmlFor="Name">Name*</label><br />
              <input type="text" placeholder='Your Name' name='YourName' autoComplete='off' value={firstname} onChange={(e)=>setFirstName(e.target.value)}/><br /><br />
              <label htmlFor="LName">Last Name</label><br />
              <input type="text" placeholder='Your Last Name' name='YourLname' autoComplete='off' value={lastname} onChange={(e)=>setLastName(e.target.value)}/><br /><br />
              <label htmlFor="email">Your email*</label><br />
              <input type="email" placeholder='Your email address' name='YourEmail' autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)}/><br /><br />
              <label htmlFor="Message">Message*</label><br />
              <input type="textarea" placeholder='Enter your message' name='YourMsg' autoComplete='off' value={message} onChange={(e)=>setmessage(e.target.value)}/><br /><br />
              <input type="submit" name="submit" className='booktablebtn'/>
            </form>
        </div>
    </div>
    <div className='col-md-7 offset-md-1 BookTablepara'>
      <p>BE PART OF THE CHEWS FAMILY: WE’VE CELEBRATED OUR CUSTOMERS’ BIRTHDAYS, ENGAGEMENT PARTIES AND HEN DOS AT HERE CAMPOS.</p>
    </div>
    </>
  )
}

export default BookTable