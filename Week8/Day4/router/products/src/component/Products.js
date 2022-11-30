import React from 'react'


class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products:[],
      search:'',
      name:'',
      price:''
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000/api/products')
    .then(res => res.json())
    .then(data => {
      this.setState({products:data})
    })
    .catch(e => {
      console.log(e);
    })
  }
  
  handleSearch = (e) => {
    this.setState({ [e.target.name]:e.target.value });
  }

  searchProduct = () => {
    fetch(`http://localhost:5000/api/search?q=${this.state.search}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({products:data})
      })
      .catch(e=>{
        console.log(e);
      })
  }

  addProduct = (e) => {
    const {name, price} = this.state;
    e.preventDefault();
    fetch('http://localhost:5000/api/products',{
      method:'POST',
      headers: {
        'Content-type':'application/json'
      },
      body:JSON.stringify({name, price})
    })
    .then(res=>res.json())
    .then(data => {
      this.setState({products:data})
    })
    .catch(e=>{
      console.log(e);
    })
  }

  render(){
    return(
      <div>
          <div>
            Search: <input type='text' name='search' onChange={this.handleSearch}/>
            <button onClick={this.searchProduct}>Search</button>
          </div>
          <div>
            <h2>Add product</h2>
            <form onSubmit={this.addProduct}>
              Name: <input type='text' name="name" onChange={this.handleSearch}/>
              Price: <input type='text' name="price" onChange={this.handleSearch}/>
              <input type='submit' value='Add Product' />
            </form>
          </div>
          {
            this.state.products.map(item => {
              return (
                <div key={item.id}
                style={{
                  display:'inline-block',
                  margin:'20px',
                  padding:'20px',
                  border:'1px solid #fff'
                }}>
                  <h2>{item.name}</h2>
                  <p>{item.price}</p>
                </div>
              )
            })
          }
      </div>
    )

  }
}

export default Products