import React, { useState, useEffect } from 'react'
import './whetherstyle.css'
import WeatherCard from './WeatherCard'

const Whether = () => {

    const [searchValue, setsearchValue]= useState("Pune")
    const [tempInfo,setTempInfo] = useState({})

    const getWeatherInfo = async () =>{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=33a7e0d850145231f7134517debd55bd`
            const res = await fetch(url)
            const data = await res.json()
            const {temp, humidity, pressure} = data.main
            const {main:weathermood} = data.weather[0]
            const {name}  = data;
            const {speed} = data.wind
            const {country, sunset} = data.sys
            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            }
            setTempInfo(myNewWeatherInfo)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        getWeatherInfo()
    },[])
    

  return (
    <>
        <div className='wrap'>
            <div className='search'>
                <input type="search" placeholder='search...' autoFocus id='search' className='searchTerm' value={searchValue} onChange={(e)=>setsearchValue(e.target.value)}/>
                <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
            </div>
        </div>
        <WeatherCard tempInfo = {tempInfo}/>
    </>
  )
}

export default Whether