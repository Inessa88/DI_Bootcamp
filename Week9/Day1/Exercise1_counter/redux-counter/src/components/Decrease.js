import {connect} from 'react-redux';
import {decrease_count} from '../actions/index.js';
import {DECREASE_COUNT} from '../actions/index.js';
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