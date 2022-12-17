import {useState, useEffect, useContext, createContext} from 'react';
import {AppContext} from '../App'
import Child from './Child'

export const UsersContext = createContext(null)
//only a component which is wrapped with Provider knows about those variables

const Users = (props) =>{
  const [users, setUsers] = useState([])

    const{name, setName} = useContext(AppContext) //here we distract name and setName from App


  useEffect(()=>{


    const getData = async()=>{
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data)
        }
        catch(e){
            console.log(e);
        }
        
    }
    getData()


  },[]); 

 useEffect(()=>{
    setName('Robots')
 }, [])

    return(
        <>
        <h1>{name}</h1>
        <Child/>
        {/* <UsersContext.Provider value={{name, myFunction, handleSubmit}}>
            <Home/>
        </UsersContext.Provider>  this is an example, that we can use it anywhere, not only in App component*/}
        {
            users.map(item =>{
                return(
                    <div key={item.id}>
                        {item.name} {item.username}{item.email}
                    </div>
                )
            })
        }
        </>
    )
    }


export default Users;
