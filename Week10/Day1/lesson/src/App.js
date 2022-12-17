import {useState, useEffect, createContext} from 'react';
import './App.css';
import Users from './components/Users'


export const AppContext = createContext(null);


function App(props) {
  const[name, setName] = useState('')
  const[txt, setTxt] = useState('')


  // const[state, setState] = useState()
  // this.state={
  //   count:0,
  //  name: '',
  //  users: []
  // }
  // this.setState({count:10})
  // const [count, setCount] = useState(0)
  // const [recount, setRecount] = useState(10)
  // const [rtxt, setTxt] = useState('10')

  // useEffect(()=>{
  //   console.log(count);
  //   setRecount(recount+10)

  // },[txt,props.userid]); //here also youcanput many things//this way I also want componentDidUpdate//if I want only componentDidMount, without any other updates, I put there only empry array
  
  
  
  // const [name, setName] = useState('')
  // const [users, setUsers] = useState({name: '', username: ''})

  // const addOne =()=>{
  //   setCount(count+1)
  // } down there we can make it faster
  return (
    <div className="App">
      <AppContext.Provider value={{name, setName, txt, setTxt}}>
        
        <Users/>
        <Dashboard/>
      </AppContext.Provider>
      {/* <header className="App-header">
        <User/>
        <input onChange={(e)=>setTxt(e.target.value)}/>
        <button onClick={()=> setCount(count+1)}> + </button>
        count:{count} recount:{recount}
        <button onClick={()=> setCount(count-1)}> - </button>
      </header> */}
    </div>
  );
}

export default App;
