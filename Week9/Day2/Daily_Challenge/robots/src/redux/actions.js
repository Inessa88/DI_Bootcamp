
export const SEARCH = 'SEARCH';
export const GET_ROBOTS = 'GET_ROBOTS'

export const search = (value) =>{
    return{
        type: SEARCH,
        payload: value
    }
}

export const getRobots = (arr) =>{
    return{
        type: GET_ROBOTS,
        payload: arr
    }
}
