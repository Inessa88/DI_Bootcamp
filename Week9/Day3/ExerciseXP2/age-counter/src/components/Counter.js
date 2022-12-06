import {connect} from 'react-redux';
import Increase from './Increase'
import Decrease from './Decrease'



const Counter = (props) =>{

    return(
        <div>
            <p>Your age: {props.count}</p>
            <Increase/>
            <Decrease/>

        </div>
    )
}


const mapStateToProps = (state) =>{
    return {
        count:state.count
    }
}

export default connect(mapStateToProps)(Counter)