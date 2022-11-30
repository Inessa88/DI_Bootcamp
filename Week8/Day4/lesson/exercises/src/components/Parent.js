const Parent = (props) => {
    console.log(props);
    if(props.username==='admin'){
        return(
            <>
            <h1>admin page</h1>
            </>
        )

    // return props.children
    //I will see a chld component but not a parent component
}
}

export default Parent