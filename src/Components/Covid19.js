import React,{ useEffect, useState } from 'react'

const Covid19 = () => {


    const [data, setData] = useState([])

    const getCovidData = async () =>{
    try{
      const res = await fetch('https://data.covid19india.org/data.json')
      const data = await res.json()
      console.log(data.statewise[0])
      setData(data.statewise[0])
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getCovidData();
  },[])

  return (
    <div>
        <h1>Live Updates</h1>
        <ul>
            <li>{data.recovered}</li>
            <li>{data.deaths}</li>
            <li>{data.state}</li>
        </ul>
    </div>
  )
}

export default Covid19