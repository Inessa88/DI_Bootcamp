import React from 'react'

class Vote extends React.Component {
  constructor() {
    super();
    this.state = {
      languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
      ]
    }
  }
  addOne = (langObj) => {
    // console.log(langObj);
    langObj.votes++;
    // this cloning we do everytime we need to change an object and render it again
    this.setState({languages:[...this.state.languages]})
  }
  
  render(){
    return (
      <div>
        {
          this.state.languages.map((item,i)=>{
            return(
              <div key={i}>
                {item.name} {item.votes}
                <button onClick={ ()=>this.addOne(item) }>Add</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default Vote