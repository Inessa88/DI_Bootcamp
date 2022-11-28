// Exercise 1

// const Car = (props) => {
//     return <h2>This car is {props.model}</h2>;
// }


import React from 'react';
import Garage from './Garage'

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        color: "blue",
        model: "Mustang"};
  }
  render() {
    return (
        <div>
            <h2>This car is {this.state.color} {this.state.model}</h2>
            <Garage size='small'/> 
        </div>
    )
    

  }
}

export default Car