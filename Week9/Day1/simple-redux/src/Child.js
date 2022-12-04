import {connect} from 'react-redux';
import {changePropTwo} from './actions';

//in function we pass props, this is why we use props.my_text_one without 'this.'

const Child = (props) => {
  return (
    <>
      <h1>Child Component</h1>
      <div>{props.my_one}</div>
      <br/>
      <button onClick={()=>props.changeTwo(props.my_one)}>Change Prop two to Prop one</button>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    my_one: state.property_one
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      changeTwo: (val) => dispatch(changePropTwo(val))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Child)