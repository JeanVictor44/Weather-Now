import {WeatherContainer} from './InfoWeatherElements'
import WeatherItem from './WeatherItem'
import water from '../../assets/Icons/water.svg'
import sun from '../../assets/Icons/sun.svg'
import wind from '../../assets/Icons/wind.svg'
import thermometer from '../../assets/Icons/thermometer.svg'

const InfoWeather = (props) => {
    return (
        <WeatherContainer>
            
            <WeatherItem src={water} info="Umidade" infoValue={props.info.humidity}/>            
            <WeatherItem src={sun}   info="Sol"     infoValue={props.info.humidity}/>
            <WeatherItem src={wind}  info="Ventos"  infoValue={props.info.wind}/>
            <WeatherItem src={thermometer}  info="Sensação térmica"  infoValue={props.info.feelsLike}/>
            

        </WeatherContainer>
    )
}
export default InfoWeather;