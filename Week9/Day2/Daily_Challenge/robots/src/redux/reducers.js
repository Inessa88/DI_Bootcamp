import {SEARCH, GET_ROBOTS} from './actions';

const initState ={
    robots:[],
    text:''
}

export const reducer = (state=initState,action={}) =>{
    switch (action.type) {
        case SEARCH:
            return {...state, text:action.payload}
        case GET_ROBOTS:
            return{...state, robots:action.payload};
        default:
            return{...state};
    }
}
