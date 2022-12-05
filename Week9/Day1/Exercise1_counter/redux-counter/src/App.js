import {Provider} from 'react-redux';
import store from './store/index.js';
import './App.css';
import Counter from './components/Counter'

function App() {
  return (
    <Provider store ={store}>
      <Counter/>
    </Provider>
  );
}

export default App;
