import {connect} from 'react-redux';
import {increase_count} from '../redux/actions';

const Increase = (props) =>{
    return(
        <button onClick={props.increase}> AGE UP </button>
    )
}
const mapDispatchToProps = (dispatch) =>{
    return{
        increase: ()=>dispatch(increase_count())
        
    }
}
export default connect(null,mapDispatchToProps)(Increase)
