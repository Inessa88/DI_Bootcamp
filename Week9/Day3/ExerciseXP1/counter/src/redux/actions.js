
export const INCREASE_COUNT = 'INCREASE_COUNT'
export const DECREASE_COUNT = 'DECREASE_COUNT'
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'

export const increase_count = () =>{
    return{
        type:INCREASE_COUNT
    }
}

export const decrease_count = () =>{
    return{
        
        type:DECREASE_COUNT
    }
}

export const increment_if_odd = () =>{
        return{
            type:INCREMENT_IF_ODD
    
}
   
}

export const increment_async = () =>{
    return{
        type:INCREMENT_ASYNC
    }
}


    