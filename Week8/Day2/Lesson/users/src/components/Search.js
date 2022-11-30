const Search = (props) =>{
    return(
        <>
            <input type='text' onChange={props.handleChange}/>
            <button onClick={props.handleClick}>Search</button>
        </>
    )
}

export default Search