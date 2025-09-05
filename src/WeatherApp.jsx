import { useState } from "react";
import Infobox from "./InfoBox";
import SearchBox from "./Searchbox";

 export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState(
   {
       city:"Delhi",
       feelsLike: 35.02,
       humidity: 75,
       temoMax: 29.52,
       temp: 29.52,
       tempMin: 29.52,
       weather: "overcast clouds"
    }
);

let updateInfo=(result)=>{
    setWeatherInfo(result);
}

    return(
        <div>
        <h2 style={{textAlign:"center"}}>Weather App </h2>
        <SearchBox UpdateInfo={updateInfo}/>
        <br/> <br/>
        <Infobox info={weatherInfo}/>
        </div>
    )
 }