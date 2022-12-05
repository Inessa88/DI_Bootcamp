export const DETAIL = 'DETAIL'

//function name: showDetail
//parametrs: obj - the movie object detail
//return: an object with type DETAIL payload: movie object
//author:...
//created: 04/12/2022
//updated: 05/12/2022
// updated by:...
//updated: the name of parametrs
export const showDetail = (obj_movie) =>{
    return{
        type:DETAIL,
        payload: obj_movie
    }
}