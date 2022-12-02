import ErrorBoundary from './ErrorBoundary';
const Shop = (props) =>{
    function err() {
        throw Error (
            'here is my error'
        )
        
    }
    return(
        <>
            <div>
                <ErrorBoundary>
                <h1>Shop </h1>
                <button onClick={err}></button>
                </ErrorBoundary>
            </div>
        </>
        
    )
}

export default Shop
