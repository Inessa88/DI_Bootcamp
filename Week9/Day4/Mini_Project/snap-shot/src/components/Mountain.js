import React from 'react'

class Mountain extends React.Component {
    constructor(){
      super();
      this.state = {
        photos:[]
        }
    }

    componentDidMount(){
        this.getPictures()
        
      }
      
      handleSearch = (e) => {
        this.setState({ search:e.target.value });
      }


    getPictures =()=>{
      let myHeaders = new Headers();
      myHeaders.append("Authorization", "563492ad6f917000010000019d98263b43b943fd87915b7086d4e9fb");
           
      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch("https://api.pexels.com/v1/search?query=mountain&orientation=square&size=small&per_page=30", requestOptions)
      .then(res => res.json())
      .then(data => {
        this.setState({photos: data.photos.map((element)=>element.src.small)})
      .catch(e => {
          console.log(e);
        })
      });

      }
    
      render(){
        return (
          <div>
              <h1>SnapShot</h1>
              <div>
                {/* Search: <input type='text' name='search' onChange={this.handleSearch}/>
                <button onClick={this.searchProduct}>Search</button> */}
              </div>
              <h3>Mountain Pictures</h3>
              
              {
            this.state.photos.map((item,index)=>{
              return (
                  <div key={index}>
                  <img src={item} alt="Mountain"/>
                  </div>
              )
            })
          }
          </div>
        );
      }

        
      
      
}

export default Mountain




