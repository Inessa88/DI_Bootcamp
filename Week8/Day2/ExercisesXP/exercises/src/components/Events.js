import React from 'react';
 class Events extends React.Component {
    constructor(props) {
    super(props);
        this.state = {isToggleOn: true}
        
        this.onAndOff = this.onAndOff.bind(this);
    }
  

clickMe = () => {
    alert('I was clicked');
};


onAndOff() {
  this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
  }));
}

handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    alert('The Enter was pressed, your input is: React')
  }
 }   


    render() {
      
      return (
        <div>
          <button onClick={this.onAndOff}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
            <button onClick={this.clickMe}>Click Me</button>
            <input type="text" id="one" onKeyPress={this.handleKeyPress} />
        </div>
      )
    }
}
 
  
export default Events