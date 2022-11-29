import React from 'react';

class Color extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoriteColor: "red"};
      this.turnToBlue = this.turnToBlue.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
        this.setState({ favoriteColor: 'yellow' });
    }, 5000);
      }

      turnToBlue() {
        this.setState({favoriteColor: 'blue' });
      }
     
      
        render() {
            return (
            <div>
                <button onClick={this.turnToBlue}>Click here</button>
                <h2>My favorite color is {this.state.favoriteColor}</h2>
        
            </div>
            );
        }
    }

  export default Color