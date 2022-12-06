import {connect} from 'react-redux';
import {increment_if_odd} from '../redux/actions';

const IncrementIfOdd = (props) =>{

        return(
        <button  onClick={props.incrementifodd}>Increment if odd</button>
        )

    
}
const mapDispatchToProps = (dispatch) =>{
    return{
        incrementifodd: ()=>dispatch(increment_if_odd())
        
    }
}
export default connect(null,mapDispatchToProps)(IncrementIfOdd)