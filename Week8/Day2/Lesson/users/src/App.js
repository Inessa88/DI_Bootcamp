import User from './components/User'
import UserC from './components/UserC'
import './App.css';


function App() {
  let usersData = [
    {id:1,name:'Tim',username:'timtim',email:'timname@gmail.com'},
    {id:2,name:'Mary',username:'marymary',email:'tmaryname@gmail.com'},
    {id:3,name:'John',username:'johnjohn',email:'johnname@gmail.com'},
    {id:14,name:'Dana',username:'danadana',email:'dananame@gmail.com'}
    
  ]
  return (
    <div >
      <UserC name='aaa' username='bob' email='bob@gmail.com'/>
        {
          usersData.map(item=>{
            return(
              
                <User id={item.id} name={item.name} username={item.username} email={item.email}/>
                // <UserC id={item.id} name={item.name} username={item.username} email={item.email}/> I also can put UserC here 
              
            )
          })
        }
        {/* {
          console.log('hello from app')
        }
        <User name='John' username='johnjohn' email='john@gmail.com'/>
        <User name='Mary' username='marymary' email='mary@gmail.com'/> */}
        {/* <User/> */}
      
    </div>
  );
}

export default App;
