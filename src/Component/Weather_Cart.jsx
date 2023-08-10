import React ,{useState,useEffect}from 'react'

const Weather_Cart = ({tempData}) => {
    const[weatherState,setWeatherState]=useState("");
    const{temp,humidity,wethermood,country,sunset,speed,name,pressure}=tempData;
    let sec=sunset;
    let date=new Date(sec*1000);
    let timestr=`${date.getHours()}:${date.getMinutes()}`;

    useEffect(()=>{
        if(wethermood){
            switch(wethermood){
                case"Drizzle":setWeatherState("wi-day-sunny");
                break;

                case"Clouds":setWeatherState("wi-day-cloudy");
                break;

                case "Haze":setWeatherState("wi-fog");
                break;
                default:setWeatherState("wi-fog");
            }
        }
    },[wethermood])
  return (
    <>
     <article className='cartArea'>
            <div className='WeatherCart'>
                <div className='w_icon'>
                <i className={`wi ${weatherState}`}></i>
                </div>
                <div className='w_desc'>
                    <div className='w_temp_info'>
                        <div className='w_temp'>{temp} &deg;</div>
                        <div className='w_place'>{wethermood} <br/>{name}</div>
                    </div>
                    <div className='w_date'>
                        <p className='time'>{new Date().toLocaleString()}</p>
                        </div>
                </div>

                <div className='w_other_info'>
                    <div className="w_sec1">
                        <i className="wi wi-sunset "></i>
                        <div className="sunset">{timestr} <br/>sunset</div>
                    </div>
                    <div className="w_sec1">
                        <i className="wi wi-humidity "></i>
                        <div className="Humidity">{humidity}<br/> Humidity</div>
                    </div>
                    <div className="w_sec1">
                        <i className="wi wi-pressure"></i>
                        <div className="pressure">{pressure}<br/> pressure</div>
                    </div>
                    <div className="w_sec1">
                        <i className="wi wi-windy"></i>
                        <div className="speed">{speed} <br/> speed</div>
                    </div>
                </div>

            </div>
        </article>
    </>
  )
}

export default Weather_Cart