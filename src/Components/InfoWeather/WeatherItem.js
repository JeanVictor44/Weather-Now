import {WeatherItemContainer} from './InfoWeatherElements'


const WeatherItem = (props) => {
    return (
        <WeatherItemContainer>
            <img src={props.src} alt="Icone Weather"/>
            <div>
                <span>{props.info}</span>
                <span>{props.infoValue}</span>
            </div>
        </WeatherItemContainer>
    )
}

export default WeatherItem
