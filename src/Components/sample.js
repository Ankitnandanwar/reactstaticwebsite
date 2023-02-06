import React from 'react'
import './style.css'

const Sample = () => {

  const netflixname = 'She-Hulk'
  const showname = 'Flash'
  const date = new Date().toLocaleString()

  return (
    <>
        <h1>Ankit Nandanwar Netflix Pick</h1>
        <p>List of 5 Best Series</p>
        <ol className='style'>
            <li>Dark</li>
            <li>Extra Curricular</li>
            <li>My Holo Love</li>
            <li>{netflixname}</li>
            <li contentEditable="true">{`${netflixname} ${showname}`}</li>
        </ol>

        <p>Current Date and Time is {date}</p>
        <img src="https://picsum.photos/200/300" alt="logo-img" />
    </>
  )
}

export default Sample