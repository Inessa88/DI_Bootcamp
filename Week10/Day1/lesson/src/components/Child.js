import {useContext, useEffect} from 'react';
import {AppContext} from '../App'


const Child =(props) =>{

    useEffect(()=>{
        setTxt('MyApp')
    })
    const {name, txt, setTxt} = useContext(AppContext)
    return(
        <>
        {txt}:{name} 
        </>
    )
}
export default Child