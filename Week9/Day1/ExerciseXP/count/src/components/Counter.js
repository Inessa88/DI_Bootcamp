import {increaseCount} from '../ reducers/actions/index';
import {decreaseCount} from '../ reducers/actions/index';
import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component {
  
    render(){
      return (
        <div className="App">
          <header className="App-header">
          <button onClick={this.props.decrease}> - </button>
          <p>{this.props.counter}</p>
          <button onClick={this.props.increase}> + </button>
          </header>
        </div>
      );
    }
    
  }
   const mapStateToProps = (state) =>{
    return{
      counter: state.count,
      
    }
   }
  
   const mapDispatchToProps = (dispatch) =>{
    return {
      decrease: () => dispatch(decreaseCount()),
      increase: () => dispatch(increaseCount())
    }
   }
  export default connect(mapStateToProps, mapDispatchToProps)(Counter);
  