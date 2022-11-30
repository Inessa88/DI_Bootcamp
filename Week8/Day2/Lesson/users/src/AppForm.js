import React from 'react';

class AppForm extends React.Component{
    constructor(){
        super();
        this.state = {
            username:'',
            email: '',
            colorId:0,
            isGo:false
        }

        // this is setting a dynamic key to an object
        let key = 'name'

        let obj = {
            [key]:'aaa'
        }
        // console.log(obj);
    }

    // this is a variant instead of making 2 functions - object property with dynamic key


    handleInput =(e) =>{
        const value =(e.target.type == 'checkbox') ? e.target.checked : e.target.value;
        // console.log(e.target.value);
        this.setState({[e.target.name]:value})
    }

    // handleInput =(e) =>{
    //     // console.log(e.target.value);
    //     this.setState({username:e.target.value})
        

    // }
    // handleEmail = (e) => {
    //     this.setState({email:e.target.value})
    // } in the case of this function, in select will be this.handleEmail and not this.handleInput

    handleSubmit = (event) =>{
        event.preventDefault();
        alert('Username is ' + this.state.username + ' and email is ' + this.state.email + '' + this.state.colorId + this.state.isGo)

    }


    // handleSelect =(e) =>{
    //     // console.log(e.target.value);
    //     this.setState({colorId:e.target.value})
    // } in the case of this function, in select will be this.handleSelect and not this.handleInput


    // handleCheck = (e) =>{
    //     this.setState({isGo:e.target.checked})
    //     // console.log(e.target.checked);
    // }in the case of this function, in select will be this.handleCheck and not this.handleInput

    render(){
        return(
            <>
            <form onSubmit ={this.handleSubmit}>
                Username: <input type='text' name ='username' onChange={this.handleInput} placeholder = 'Enter Username'/>
                Email: <input type='email' name='email' onChange={this.handleInput} placeholder = 'Enter email'/>
                <select name='colorId'onChange={this.handleInput}>
                    <option value='1'>Red</option>
                    <option value='2'>Blue</option>
                    <option value='3'>Green</option>
                </select>

                Is Going:<input type='checkbox' name='isGo' onChange={this.handleInput}/>


                <input type='submit' value='Submit'/>
            </form>
            </>
        )
    }
}

export default AppForm



