import { createRoot } from 'react-dom/client'
import './Style.css'
import WeatherApp from './WeatherApp.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <WeatherApp/>
  </>
)
