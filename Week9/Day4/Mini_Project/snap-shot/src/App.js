import './App.css';
import{Routes, Route, Link} from 'react-router-dom'
import Search from './components/Search'

function App() {
  return (
    <div>
      <nav style={{display: 'inline-block'}}>
        <Search/>
        <Link to='/'>Search</Link>
        <Link to='/mountain'>Mountain</Link>
        <Link to='/sea'>Sea</Link>
        <Link to='/flower'>Flower</Link>
        <Link to='/sun'>Sun</Link>
      </nav>
      <Routes>
        <Route path='/' component={<Search/>}/>
        <Route path='/mountain' component={<Search search='mountain'/>}/>
        <Route path='/sea' component={<Search search='sea'/>}/>
        <Route path='/flower' component={<Search search='flower'/>}/>
        <Route path='/sun' component={<Search search='sun'/>}/>
   
      </Routes>
    </div>
  );
}

export default App;

