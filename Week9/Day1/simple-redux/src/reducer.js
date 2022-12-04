let initState = {
    property_one:'one one one',
    property_two:'two',
  }
  
  export const reducer = (state=initState, action={}) => {
    // action.type action.payload
    switch (action.type) {
      case 'PROP_ONE':
        return {...state, property_one:action.payload};
      case 'PROP_TWO':
       return {...state, property_two: state.property_one}
      case 'PROP_TWO_WITH':
        return {...state, property_two: action.payload}
      default:
        return {...state}
    }
  }


   
    // return {...state} //here we are cloning our state
    // return{...state, property_one:'text text text'} //if I want to change it from 'one one one', it's like useing this.setState
