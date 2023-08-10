import React,{useEffect, useState} from 'react'
import Weather_Cart from './Weather_Cart'

const Weather = () => {
    const[input,setInput]=useState("Delhi");
    const[tempData,setTempData]=useState('');
    const getData=async()=>{
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=e80d8dd2e5288d6e4aee907216e3e6d1`
        let res=await fetch(url);
        let data=await res.json();
        
        const{humidity}=data.main;
        const{temp}=data.main;
        const{pressure}=data.main;
        const name=data.name;
        const {main:wethermood}=data.weather[0];
        const{speed}=data.wind
        const{country,sunset}=data.sys;

        const temp_info={temp,pressure,humidity,wethermood,country,sunset,speed,name}
        setTempData(temp_info);
        }
        catch(error){
            return error;
        }
        
    }

    useEffect(()=>{
        getData();
    },[input]);

  return (
    <section className="wather">
        <div className="search">
            <input type="text"
                    value={input}
                    onChange={(e)=>{setInput(e.target.value)}}
             />
            <button type="button" onClick={getData}>Search</button>
        </div>
       <Weather_Cart tempData={tempData}/>
    </section>
  )
}

export default Weather