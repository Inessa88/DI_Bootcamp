import {INCREASE_COUNT, DECREASE_COUNT, INCREMENT_IF_ODD,INCREMENT_ASYNC} from './actions'

const initState = {
    count:0
}

export const reducer = (state=initState, action={})=>{
    switch (action.type) {
        case INCREASE_COUNT:
            return {...state, count:state.count+1}
        case DECREASE_COUNT:
            return {...state, count:state.count-1}
        case INCREMENT_IF_ODD:
            if (state.count%2 !== 0){
                return {...state, count:state.count+1}
            } return {...state}
        case INCREMENT_ASYNC:
            return {...state, count:state.count+1}
        default:
            return {...state}
    }
    
}