import React from 'react';
import './Exercise4.css';
import logo from './logo.svg';

const Exercise4 = () => {
    let words = ['first','second','third','forth'];   
    const severalWords = words.map((word)=><li key={word}>{word}</li>)
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return (
        <div>
            <h1 style={{ color: 'red', 
                      background: 'lightblue'}}>
            Here is the header
            </h1>
            <h1 style={style_header}>
            Here is one more header
            </h1>
            
            <p className="para">Here is a paragraph</p>
            <a href="/Exercise4">link text</a>
            <form >
                <label>
                 Name:
                <input type="text" value="Form"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <img src= {logo}/>
            <ul>{severalWords}</ul>
        </div>
    )
}

export default Exercise4


