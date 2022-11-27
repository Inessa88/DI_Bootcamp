import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Secondcomponent from './components/Secondcomponent';


function App() {
  //here the comment is ordinary
  return (
    <div className="App">
      <header className="App-header">
        <Hello/>
        <Secondcomponent/>
        {/*comment*/}
      </header>
    </div>
  );
}

export default App;
