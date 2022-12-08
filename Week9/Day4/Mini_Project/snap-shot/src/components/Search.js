import React from 'react'
import { Navigate } from 'react-router-dom'

class Search extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        photos:[],
        search:'sky'
      }
    }

    componentDidMount(){
        this.getPictures()
        
      }
    
      handleSearch = (e) => {
        this.setState({ search: e.target.value });
      } 
    getPictures =()=>{
      let myHeaders = new Headers();
      myHeaders.append("Authorization", "563492ad6f917000010000019d98263b43b943fd87915b7086d4e9fb");
           
      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch(`https://api.pexels.com/v1/search?query=${this.props.search || this.state.search}&orientation=square&size=medium&per_page=30`, requestOptions)
      .then(res => res.json())
      .then(data => {
        this.setState({photos: data.photos.map((element)=>element.src.medium)})
      .catch(e => {
          console.log(e);
        })
      });

      }
    
      render(){

        return (
          <div style={{textAlign: 'center'}} >
            
              <div>
                <h1>SnapShot</h1>
                <p>{this.props.search}</p>
                <input type='text' name='search' onBlur={this.handleSearch}/>
                <button onClick={this.getPictures}>Search</button>
              </div>
                <button onClick={this.handleSearch} style={{backgroundColor: '#0A99C3', color: 'white', margin: '40px', borderRadius:'5px', width: '100px'}}>Mountain</button>
                <button onClick={this.handleSearch} style={{backgroundColor: '#0A99C3', color: 'white', margin: '40px', borderRadius:'5px', width: '100px'}}>Sea</button>
                <button onClick={this.handleSearch} style={{backgroundColor: '#0A99C3', color: 'white', margin: '40px', borderRadius:'5px', width: '100px'}}>Flower</button>
                <button onClick={this.handleSearch} style={{backgroundColor: '#0A99C3', color: 'white', margin: '40px', borderRadius:'5px', width: '100px'}}>Sun</button>
              <div>

              </div>
              <h1 style={{textTransform: 'capitalize'}}>{this.state.search} Pictures</h1>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gridGap: '1rem'}}>
                    {
            this.state.photos.map((item,index)=>{
              return (
                  <div key={index} >
                  <img src={item} alt="Photo"/>
                  </div>
              )
            })
          }
                </div>
   
              

          </div>
        );
      }


      
}

export default Search
