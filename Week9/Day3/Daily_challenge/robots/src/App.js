import React from 'react';
import Robot from './components/Robot'
import './App.css';
import 'tachyons'
import Search from './components/Search'
import {connect} from 'react-redux';
import {getRobots} from './redux/actions'


class App extends React.Component {


  componentDidMount(){
    this.props.getRobots()
  }

   render(){
    const{robots,text} = this.props;

    const filterRobots = robots.filter(item =>{
      return item.name.toLowerCase().includes(text.toLowerCase())
    })
    return (
        <div classname = 'tc' >
          <h1>ROBOFRIENDS</h1>
          <Search/>
          {/* <button onClick={()=> this.props.getRobots()}>Click</button>  */}
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
    robots: state.reducer_robots.robots,
    text:state.reducer_search.text
    
  }
 }

 const mapDispatchToProps = (dispatch) =>{
  return{
    getRobots: () => dispatch(getRobots())

  }
 }


export default connect(mapStateToProps, mapDispatchToProps)(App);

