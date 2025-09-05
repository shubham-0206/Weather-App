import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./Style.css"


 export default function Infobox({info}){
     
  const Img_url="https:plus.unsplash.com/premium_photo-1673278171570-18af2a6ece31?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const Hot_Url="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
  const Cold_Url="https://images.unsplash.com/photo-1711982788551-8b5c5a2077dd?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
  const Rainy_Url="https://images.unsplash.com/photo-1718917911088-23f5d4b0bacc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return(
        <div className="InfoBox">
     <div className='Card'>
         <Card sx={{ maxWidth: 345 }}>
          <CardMedia
  sx={{ height: 140 }}
  image={
    info.humidity > 80
      ? Rainy_Url
      : info.temp > 15
        ? Hot_Url
        : info.temp < 15
          ? Cold_Url
          : Img_url

        }

        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity > 80
         ? <ThunderstormIcon />
         : info.temp > 15
         ? <SunnyIcon />
         : info.temp < 15
         ? <AcUnitIcon />
         : null}

        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <div>Temprature-{info.temp}&deg;C</div>
        <div>Humidity-{info.humidity}</div>
        <div>Min_Temp-{info.tempMin}&deg;C</div>
        <div>Max_Temp-{info.temoMax}&deg;C</div>
        <div>Weather can be described as {info.weather} and <b>FeelLike-{info.feelsLike}&deg;C</b></div>

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">OK</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
     </div>
        </div>
    )
 }