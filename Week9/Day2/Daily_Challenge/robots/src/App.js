import React from 'react';
import Robot from './components/Robot'
import './App.css';
import 'tachyons'
import Search from './components/Search'
import {connect} from 'react-redux';
import {getRobots} from './redux/actions'

class App extends React.Component {

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
  this.props.getRobots(data)
    })
  .catch(e=>{
    console.log(e);
    })
}

render(){
  const{robots,text} = this.props;

  const filterRobots = robots.filter(item =>{
    return item.name.toLowerCase().includes(text.toLowerCase())
      })
    return (
      <div classname = 'tc' >
        <Search/>
        { 
        filterRobots.map(item=>{
          return <Robot robot={item} key={item.id}/>
            })
        }
      </div>
  );
}

}

const mapStateToProps = (state) =>{
  return{
  robots: state.robots,
  text:state.text
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
  getRobots: (arr) => dispatch(getRobots(arr))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);