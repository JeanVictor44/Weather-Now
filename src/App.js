import {useState, useEffect} from 'react'
import {GlobalStyles} from './GlobalStyles'
import {ContainerInput,InputCity,SearchButton} from './Components/Inputs/InputsElements'
import InfoWeather from './Components/InfoWeather/index'
import Footer from './Components/Footer/index'
import fetch from 'node-fetch'
import {BackgroundContainer} from './Components/BackgroundSection/BackgroundSectionElements'
const {REACT_APP_API_KEY} = process.env

const App = () => {
  const [location, setLocation] = useState('')
  const [infoWeather, setInfoWeather] = useState('')
  const date = new Date()
  const days = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado']
  const months = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov', 'Dez']
  const haveInfo = infoWeather.main
  const temp =  haveInfo ? infoWeather.main.temp: ''
  const info = {
    feelsLike:haveInfo ? `${infoWeather.main.feels_like}°C` : '',
    humidity:haveInfo ? `${infoWeather.main.humidity}%` : '',
    wind: haveInfo ? `${infoWeather.wind.speed} m/s` : ''

  } 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition( position => {
      const {coords:{latitude, longitude}} = position
      getWeatherWithUserLocation(latitude, longitude)
      .then(weatherResponse => {
        if(!location) {
          console.log(infoWeather)
          setLocation(weatherResponse.name)
          setInfoWeather(weatherResponse)
        }
      })
    })

  })

  async function getWeatherWithUserLocation(latitude, longitude) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt&appid=${REACT_APP_API_KEY}`)
    const weatherResponse = await response.json()
    return weatherResponse
  }


  async function requestWeatherLocationTyped(location){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=pt&appid=${REACT_APP_API_KEY}`)
    const weatherResponse = await response.json()
    return weatherResponse
  }

  function getWeatherLocationTyped(e) {
    const eventTarget = e.target
    const parentEventTarget = eventTarget.parentElement
    const locationTyped = parentEventTarget.children[0].value
    requestWeatherLocationTyped(locationTyped)
    .then(weatherResponse=> {
      console.log(infoWeather)
      setLocation(weatherResponse.name)
      setInfoWeather(weatherResponse)

    }).catch(err => {
      console.log(err.message)
    })
  }

  
  return (
    <>
      <GlobalStyles />
      <BackgroundContainer temperatura={temp}>
      
        <ContainerInput>
          <InputCity />
          <SearchButton onClick={getWeatherLocationTyped} />
        </ContainerInput>
        <h1>{location}</h1>
        <h2>{date.getDate() +', '+ months[date.getMonth()] + ', '+ days[date.getDay()]}</h2>
        <span>{haveInfo ? infoWeather.weather[0].description: ''}</span>
        <h1>{temp}<sup>°C</sup></h1>
      </BackgroundContainer>
      <InfoWeather info={info} />
      <Footer />
    </>
  )
}

export default App

