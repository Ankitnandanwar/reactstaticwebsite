import React from 'react'
// import Covid19 from './Components/Covid19'
// import Sample from './Components/sample'

import Miniproj1 from './Components/Miniproj1'
import Sdata from './Components/Sdata'

// import UseStateinc from './Components/UseStateinc'

import ReactForm from './Components/ReactForm'

import './App.css'

const App = () => {

  function curData(val){
    return(
      <Miniproj1
      key = {val.id}
      imgsrc = {val.imgsrc}
      title ={val.title} 
      descript={val.descript} 
      link={val.link}/>
    ) 
  }

  return (
    <>
      {/* <h1>COVID 19 Tracker</h1>
      <Covid19/> */}
      
      {/* <Sample/> */}

      <h1 className='heading_style'>List of Top 5 Amazon Series 2022</h1>
      {Sdata.map(curData)}

      {/* <UseStateinc/> */}

      <ReactForm/>

    </>
  )
}

export default App
