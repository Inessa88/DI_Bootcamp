import {useContext, useEffect, useState} from 'react';
import {AppContext} from '../App';
import weather from './CurrentWeather.json'

// const BASE_URL = process.env.REACT_APP_BASE_URL;
// const API_KEY = process.env.REACT_APP_API_KEY;

const CurrentWeather = (props) => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const {city,cityKey,country, favorites, setFavorites} = useContext(AppContext);

  useEffect(()=>{
    if(cityKey){
      getCurrentWeather(cityKey)
    }
  },[cityKey])

  const getCurrentWeather = (key) => {

    // fetch(`${BASE_URL}/currentconditions/v1/${key}?apikey=${API_KEY}`)
    // .then(res=>res.json())
    // .then(data=>{
    //     setCurrentWeather(data)
    // })
    // .catch(err=>{
    //   console.log(err);
    // })
    setCurrentWeather(weather)
  }


  console.log(favorites);
  const checkFavorites = (favorites) => {
    if (!favorites.find(f => f === cityKey) && favorites.length < 5) {
      let newFavorites = favorites.concat(cityKey)
      window.localStorage.setItem('favorites', JSON.stringify(newFavorites))
      return newFavorites
    }
    else { return favorites}
  }
  if(currentWeather.length === 0) return null;
  


  const buttonStyle = {
    backgroundColor: "darkBlue",
    color: "white",
    fontFamily: "Arial",
    textAlign: "center",
    height: "30px",
    width: " 20vh",
    borderRadius: "5px"
    
  };

  return(
    <div style={{marginTop: '10vh'}}>
        <h4>{city ? 'Current Weather' : null}</h4>
        <p>{city}<br/> {country}</p>
        <button style={buttonStyle} onClick={()=>{setFavorites(checkFavorites(favorites))}}>Add To Favorites</button>
        <p>{currentWeather[0].Temperature.Metric.Value}</p>
        <h1>{currentWeather[0].WeatherText}</h1>
        <p>
          <img src={`https://developer.accuweather.com/sites/default/files/${currentWeather[0].WeatherIcon<10?'0'+currentWeather[0].WeatherIcon:currentWeather[0].WeatherIcon}-s.png`} />
        </p>        
     

    </div>
  )
}
export default CurrentWeather