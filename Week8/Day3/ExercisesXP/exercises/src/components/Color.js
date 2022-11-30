import React from 'react';

class Color extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        favoriteColor: "red"
        
    };
    
      this.turnToBlue = this.turnToBlue.bind(this);
    }

//     shouldComponentUpdate(nextState) {
//     if (nextState.value !== this.state.value) {
//         return true;
//     } else {
//         return false;
//     }
//   }
    componentDidMount() {
        setTimeout(() => {
        this.setState({ favoriteColor: 'yellow' });
    }, 5000);
      }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('prev').innerHTML =
        'Before the update the favorite color was ' + prevState.favoriteColor + ' The updated favorite color is ' +this.state.favoriteColor;
      }
      
    componentDidUpdate() {
        document.getElementById('new').innerHTML =
          'My Favorite color is ' + this.state.favoriteColor;
      }

    turnToBlue() {
        this.setState({favoriteColor: 'blue' });
      }
     
      
        render() {
            return (
            <div>
                <div id='prev'></div>
                <div  id='new'></div>
                <button onClick={this.turnToBlue}>Click here</button>
                <h2>My favorite color is {this.state.favoriteColor}</h2>
        
            </div>
            );
        }
    }

  export default Color

  
    