import {connect} from 'react-redux';
import {increase_count} from '../actions/index.js';

const Increase = (props) =>{
    return(
        <button onClick={props.increase}> + </button>
    )
}
const mapDispatchToProps = (dispatch) =>{
    return{
        increase: ()=>dispatch(increase_count())
        
    }
}
export default connect(null,mapDispatchToProps)(Increase)
