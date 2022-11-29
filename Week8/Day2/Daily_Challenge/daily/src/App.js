
import './App.css';
import React from "react";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      languages : [
        {id:0, name: "Php", votes: 0},
        {id:1, name: "Python", votes: 0},
        {id:2, name: "JavaSript", votes: 0},
        {id:3, name: "Java", votes: 0}
    ]
    }
  }
 addVote = (elem) =>{
  elem.votes++;
  this.setState({languages: [...this.state.languages]});
 }

render() {
  return(
    <section style={{backgroundColor: "aquamarine", width: "300px", height: "200px"}}>
      <h1 style={{padding: "20px"}}>Vote Your Language!</h1>
      {
        this.state.languages.map((element,index) =>{
          return(
            <div key={index} id={element.id} >
              <span style={{padding: "20px"}}>{element.votes}</span>
              <span style={{padding:"50px"}}>{element.name}</span>
              <button onClick={() => this.addVote(element)}>Click Here</button>

            </div>
          )
        })
      }
    </section>
  )
}

}
  

export default App;
