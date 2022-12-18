import {useState, createContext} from 'react';
import './App.css';
import Favorites from './components/Favorites';
import Home from './components/Home';
import{Routes, Route, Link} from 'react-router-dom';



export const AppContext = createContext(null);

function App() {

  const[city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [cityKey,setCityKey] = useState('');
  const [favorites, setFavorites] = useState([]);

  const mystyle = {
    color: "darkBlue",
    padding: "20px",
    fontFamily: "Arial",
    fontSize: "20px",
    marginTop: "3vh",
    marginBottom: "3vh"
    
  };
  return (
    <AppContext.Provider value ={{
      city, 
      setCity, 
      country, 
      setCountry, 
      cityKey, 
      setCityKey,
      favorites,
      setFavorites
    }}>
      <div className='App'>
        <nav style={{textAlign: 'start', height: '80px', display: 'flex', alignItems: 'center'}}>
          <Link style={mystyle} to='/'>Home</Link>
          <Link style={mystyle} to='/favorites'>Favorites</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </div>
    </AppContext.Provider>
    
  );
}

export default App;


