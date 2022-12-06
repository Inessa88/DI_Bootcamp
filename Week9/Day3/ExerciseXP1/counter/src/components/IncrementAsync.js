import {connect} from 'react-redux';
import {increment_async} from '../redux/actions';


const IncrementAsync = (props) =>{
    const increment = ()=>{
        setTimeout(() => {
            props.async()
        },1000);
    }
    return(

        <button onClick={increment}> Increment Async </button>
    )
    
}

const mapDispatchToProps = (dispatch) =>{
    return{
        async: ()=>dispatch(increment_async())
        
    }
}
export default connect(null,mapDispatchToProps)(IncrementAsync)