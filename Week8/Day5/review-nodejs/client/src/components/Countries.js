import React from 'react'

class Countries extends React.Component{
  constructor() {
    super();
    this.state = {
      countries:[]
    }
  }

  getData = () => {
    fetch('http://localhost:3001/countries')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      this.setState({countries:data})
    })
    .catch(e=>{
      console.log(e);
    })
  }

  render(){
    return(
      <div>
      <h2>Countries</h2>
      <div>
        <button onClick={this.getData}>Get Countries</button>
      </div>
      {
        this.state.countries.map((item,i)=>{
          return(
            <div>
              {item.country}
            </div>
          )
        })
      }
      </div>
    )
  }
}
export default Countries