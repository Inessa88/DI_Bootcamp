import React from "react";

class FormComponent extends React.Component {
  constructor(){
    super()
    this.state = {
        firstname:'',
        lastname:'',
        age:'',
        gender:'',
        countryId:0,
        isNut:false,
        isLactose:false,
        isVegan:false,
        showOnPage: false
    }
    this.handleRadio = this.handleRadio.bind(this);
  }


    handleFirstName =(e) =>{
       this.setState({firstname:e.target.value})
    } 

    handleLastName =(e) =>{
        this.setState({lastname:e.target.value})
    } 

    handleAge =(e) =>{
        this.setState({age:e.target.value})
     } 


    handleRadio = (e) =>{
        this.setState({
            gender: e.target.value
          });
        
    }

    handleSelect =(e) =>{
        this.setState({countryId:e.target.value})
    } 

    handleCheckNut = (e) =>{
        this.setState({isNut: e.target.checked? 'Yes': 'No'})
    }

    handleCheckLactose = (e) =>{
        this.setState({isLactose: e.target.checked? 'Yes': 'No'})
     
    }

    handleCheckVegan = (e) =>{
        this.setState({isVegan: e.target.checked? 'Yes': 'No'})
    }

    
handleSubmit = (e) =>{
  e.preventDefault();
  this.setState({showOnPage:true})
}

render(){
    return (
        <>
        <form onSubmit={this.handleSubmit} style={{backgroundColor: "aquamarine"}}>
            Firstname: <input type='text' name ='firstname'  onChange={this.handleFirstName} placeholder = 'First Name'/><br/>
            Lastname: <input type='text' name ='lastname'  onChange={this.handleLastName} placeholder = 'Last Name'/><br/>
            Age: <input type='textl' name='age'  onChange={this.handleAge} placeholder = 'Age'/><br/>
            <label><input type="radio" name='gender' value="Male" checked={this.state.gender === "Male"} onChange={this.handleRadio}/>Male</label><br/>
            <label><input type="radio" name='gender' value="Female" checked={this.state.gender === "Female"} onChange={this.handleRadio} />Female</label><br/>
            <h4>Select your destination</h4>
            <select name='countryId' onChange={this.handleSelect}>
                <option value='Thailand'>Thailand</option>
                <option value='Japan'>Japan</option>
                <option value='Brazil'>Brazil</option>
            </select>
            <h4>Dietary restrictions</h4>
            <label><input type="checkbox" checked={this.state.isNut} onChange={this.handleCheckNut}/>Nuts free</label><br/>
            <label><input type="checkbox" checked={this.state.isLactose} onChange={this.handleCheckLactose}/>Lactose free</label><br/>
            <label><input type="checkbox" checked={this.state.isVegan} onChange={this.handleCheckVegan}/>Vegan</label><br/>
            <input type='submit' value='Submit'/>
        </form>
        
        <div style={{backgroundColor: "orange"}}>
            {this.state.showOnPage === true ?(
            <>
                <h1>Entered information:</h1>
                <p>Your name: {this.state.firstname}  {this.state.lastname}</p>
                <p> Your age:{this.state.age}</p>
                <p>Your gender:{this.state.gender}</p>
                <p>Your destiantion:{this.state.countryId}</p>
                <p>Your dietary restrictions:</p>
                <p>**Nuts free:{this.state.isNut}</p>
                <p>**Lactose free:{this.state.isLactose}</p>
                <p>**Vegan meal:{this.state.isVegan}</p>
            </>
            ): null}

        </div>
        </>

        )
    }
}
export default FormComponent