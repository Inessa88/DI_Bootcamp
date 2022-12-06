import {connect} from 'react-redux';
import {decrease_count} from '../redux/actions';
import {DECREASE_COUNT} from '../redux/actions';
const Decrease = (props) =>{
    return(

        <button onClick={()=> props.dispatch({type:DECREASE_COUNT})}> - </button>
    )
}


const mapDispatchToProps = (dispatch) =>{
    return{
        decrease: ()=>dispatch(decrease_count())
        
    }
}
export default connect()(Decrease)