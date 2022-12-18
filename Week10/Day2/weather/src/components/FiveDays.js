import {useContext, useEffect, useState} from 'react';
import {AppContext} from '../App';
import five from './FiveDays.json'

// const BASE_URL = process.env.REACT_APP_BASE_URL;
// const API_KEY = process.env.REACT_APP_API_KEY;

const FiveDays = (props) => {
  const [fiveDays, setFiveDays] = useState(null);
  const {city,cityKey} = useContext(AppContext);

  useEffect(()=>{
    if(cityKey){
      getFiveDays(cityKey)
    }
  },[cityKey])

  const getFiveDays = (key) => {

    // fetch(`${BASE_URL}/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`)
    // .then(res=>res.json())
    // .then(data=>{
    //     setFiveDays(data)
    // })
    // .catch(err=>{
    //   console.log(err);
    // })
    setFiveDays(five)
  }

  if(!fiveDays) return null;

  return(
    <div style={{marginTop: '20vh'}}>
      <h4>{city ? 'Five Day Forecast' : null}</h4>


        <div >
                {
                    fiveDays.DailyForecasts.map(item =>{
                        return(
                            <div style={{display: 'inline-block', margin: '30px', border: '1px solid black', padding: '15px'}}>
                                <p>{item.Date.slice(0,10)} </p>
                                <h2>{(item.Temperature.Maximum.Value).toFixed()}C</h2>
                                
                            </div>



                        )
                    })
                }
        </div>


    </div>
  )
}
export default FiveDays