import Car from './components/Car';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';
import './App.css';

function App() {
  const carInfo = {name: "Ford", model: "Mustang"};

  return (
    <div className="App">
      <header className="App-header">
        {/* <Car model={carInfo.model}/> */}
        <Car/>
        <Events/>
        <Phone brand="Samsung" model="Galaxy S20" color="black" year="2020"/>
        <Color favoriteColor="red"/>
      </header>
    </div>
  );
}

export default App;
