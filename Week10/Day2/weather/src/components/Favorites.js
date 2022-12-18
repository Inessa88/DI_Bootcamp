import {useContext, useEffect, useState} from 'react';
import {AppContext} from '../App';
import weather from './CurrentWeather.json'

// const BASE_URL = process.env.REACT_APP_BASE_URL;
// const API_KEY = process.env.REACT_APP_API_KEY;

const Favorites = (props) => {
    const [currentFavorite, setCurrentFavorite] = useState([]);
    const {city,cityKey,country, favorites, setFavorites} = useContext(AppContext);
  

    const getFavorite = () =>{
        let allFavorites = JSON.parse(window.localStorage.getItem('favorites')) || []
        let favoritesWeatherArray = []
        for (const key of allFavorites) {

        // fetch(`${BASE_URL}/currentconditions/v1/${key}?apikey=${API_KEY}`)
        // .then(res=>res.json())
        // .then(data=>{
        //     setCurrentFavorite(currentFavorite => currentFavorite.concat(data))
          // favoritesWeatherArray.push(data)
        // })
        // .catch(err=>{
        //   console.log(err);
        // })
        // setCurrentFavorite(currentFavorite => currentFavorite.concat(weather))
        favoritesWeatherArray.push(weather)
    }
    return favoritesWeatherArray
    }







  let favoritesWeatherArray = getFavorite()
  return(
    <div >
      {
        favoritesWeatherArray.map(item =>{
            return(
                <div style={{display: 'inline-block', margin: '30px', border: '1px solid black', padding: '15px', marginTop: '25vh'}}>
                    <h4>{city ? 'Current Weather' : null}</h4>
                    <p>{city}<br/> {country}</p>
                    <p>{item[0].Temperature.Metric.Value}</p>
                    <h1>{item[0].WeatherText}</h1>
                    <p> 
                        <img src={`https://developer.accuweather.com/sites/default/files/${item[0].WeatherIcon<10?'0'+item[0].WeatherIcon:item[0].WeatherIcon}-s.png`} />
                    </p>
                </div>



            )
        })
    }
    </div>
  )
}
export default Favorites