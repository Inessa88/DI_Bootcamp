import {connect} from 'react-redux';
import {increase_count, decrease_count} from '../redux/actions';
import Increase from './Increase'
import Decrease from './Decrease'
import IncrementIfOdd from './IncrementIfOdd'
import IncrementAsync from './IncrementAsync'


const Counter = (props) =>{

    return(
        <div>
            <p>Clicked {props.count} times</p>
            <Increase/>
            <Decrease/>
            <IncrementIfOdd/>
            <IncrementAsync/>

        </div>
    )
}


const mapStateToProps = (state) =>{
    return {
        count:state.count
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         increase: ()=>dispatch(increase_count()),
//         decrease: ()=>dispatch(decrease_count())
        
//     }
// }
export default connect(mapStateToProps)(Counter)