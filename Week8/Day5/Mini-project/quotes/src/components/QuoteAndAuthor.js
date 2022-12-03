import React from "react";

class QuoteAndAuthor extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div style={{ backgroundColor: "white" }} className="quotebox">
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <h1 id="quote">"{this.props.quote}"</h1>
          <h5 id="author">
            -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
        </div>
        <button
          style={{ backgroundColor: randomColor }}
          id="newquote"
          onClick={this.props.handleClick}
        >
          New quote
        </button>
      </div>
    );
  }
}

export default QuoteAndAuthor;













// import React from 'react';
// import {quotes} from './QuotesDatabase'

// class Quotes extends React.Component {
//     constructor() {
//       super(0);
//       this.state = {
//         quote: "",
//         author: ""
        
//     };
    
      
//     }


    
    // turnToBlue() {
    //     this.setState({favoriteColor: 'blue' });
    //   }
     

      


     
      
//         render() {
//             return (
//             <div>
//                 {quotes.map(info => (
//         <div key={info.id}><h1>{info.quote}</h1><p>{info.author}</p></div>
//       ))}
                
//                 {/* <button onClick={this.turnToBlue}>Click here</button> */}
                
        
//             </div>
//             );
//         }
//     }

//   export default Quotes

  
    
