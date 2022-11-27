import logo from './logo.svg';
import './App.css';
import Xpone from './Xpone';
import UserFavoriteColors from './UserFavoriteColors';
import Exercise4 from './Exercise4';

// Exercise 2
const message = 'Hello World';
const myelement = <h1>I Love JSX!</h1>;
const sum = 5+5;


// Exercise 3
const user = {
  first_name: 'Bob',
  last_name: 'Dylan',
  fav_animals : ['Horse','Turtle','Elephant','Monkey']
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Exercise4/>
        <Xpone/>
        <h1>{ message }</h1>
        {myelement}
        <h1>React is {sum} times better with JSX</h1>
        <h3>{user.first_name}</h3>
        <h3>{user.last_name}</h3>
        <UserFavoriteColors fav_animals={user.fav_animals} />
        
      </header>
    </div>
  );
}

export default App;
