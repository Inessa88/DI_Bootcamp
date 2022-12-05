import {connect} from 'react-redux';
import {showDetail} from '../redux/actions'
const MovieList =(props)=>{
    return(
        <div style={{display: 'inline-block', width:'600px'}}>
            <h1>MovieList</h1>
            {
                    props.list.map((item,i)=>{
                        return(
                        <div key={i}>
                            {item.title}
                            <button onClick={()=>props.details(item)}>Detail</button>
                        </div>
                        )

                    })
            }
        </div>
    )
}


const mapStateToProps =(state) =>{
    return{
        list: state.moviesList
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        details: (movie) => dispatch(showDetail(movie))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList)