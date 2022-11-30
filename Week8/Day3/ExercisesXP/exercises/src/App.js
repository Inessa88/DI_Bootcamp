
// import Color from './components/Color'
import React from 'react';
import './App.css';
// import ErrorBoundary from './components/ErrorBoundary';

// / handleSubmit = event => {
   //   event.preventDefault();
   //   let inputs = event.target.getElementsByTagName('input')
   //   let check = event.target.checked? 'Yes' : 'No'
   //   for (const item of inputs) {
   //     console.log(item.value)
   //   }
   // }
// 1 exercise


// class BuggyCounter extends React.Component{
//    constructor() {
//      super();
//      this.state = {
//        count: 0
//      }
//    }
 
//    add = () => {
//      this.setState({count:this.state.count + 1})
//    }
 
//    render(){
//      if(this.state.count > 5) {
//        throw Error('I crashed....')
//      }
//      return(
//        <>
//          {this.state.count}
//          <button onClick={this.add}>Add</button>
//        </>
//      )
//    }
//  }





// // 1 and 2 exercise

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <ErrorBoundary>
//          <BuggyCounter/>
//          <BuggyCounter/>
//       </ErrorBoundary>

//       <ErrorBoundary>
//          <BuggyCounter/>
//       </ErrorBoundary>

//       <ErrorBoundary>
//          <BuggyCounter/>
//       </ErrorBoundary>

//       <BuggyCounter/>

//       <Color favoriteColor="red"/>
//       {/* <Child/> */}
//       </header>
//     </div>
//   );
// }


// Exercise 3


class Child extends React.Component{
  componentWillUnmount() {
    alert('The component named Header is about to be unnounted');
  }


    
  render() {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    ) 
  }
}

class App extends React.Component {
  constructor() {
     super();
     this.state = {
          show: true
     };
  }
  render() {
      return (
         <div>
            {this.state.show? <Child/> : null}
            <button onClick={() => this.setState({ show: false })}>
                Delete Header
            </button>
         </div>
      );
   }
}


export default App;
