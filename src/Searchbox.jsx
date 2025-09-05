import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Style.css"
import { useState } from 'react';


export default function SearchBox({UpdateInfo}){
    let [city ,setCity]=useState("");
    let [error,setError]=useState(false)


     const API_URL= "https://api.openweathermap.org/data/2.5/weather" 
     const API_KEY="91aa83c6dc5fe05efa9b6b4bfe2db53b"

     let getWeatherInfo=async()=>{
        try{
       let response =await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
       let jsonResponse= await response.json();
       let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        temoMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
      };
      console.log(result);
      return result
     }catch (err){
        throw err
     }

        }

    let handleChange=(event)=>{
        setCity(event.target.value)
    };

    let handleSubmit= async (event)=>{
        try{
       event.preventDefault();
       console.log(city);
       setCity("");
       let info= await getWeatherInfo();
       UpdateInfo(info);
        }catch(err){
            setError(true);

        }
       
    };

    return(
        <div className='Searchbox'>
        <h3> Search for  Weather</h3>
        <form  onSubmit={handleSubmit}>
        <TextField className='Textfield'
            id="city" label="City Name"
            variant="outlined" required
            value={city} onChange={handleChange}/>
            <br/><br/>
        <Button type='submit' variant="contained">Search</Button>
        {error && <p style={{color:"red"}}><b>No such place Exist</b></p>}
        </form>
        </div>

    )
 }