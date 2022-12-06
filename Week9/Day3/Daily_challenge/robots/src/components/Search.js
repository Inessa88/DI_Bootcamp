import {connect} from 'react-redux'
import {search} from '../redux/actions'

const Search = (props)=>{
    return(
        <div>
            <input type='text' onChange ={props.handleSearch}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        handleSearch: (e)=> dispatch(search(e.target.value))
    }
}

export default connect(null, mapDispatchToProps)(Search)