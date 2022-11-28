// import './User.css' if I have style here and in parent App.css, this import will overwright it
import { Link } from '@mui/material';
import Button from 'react-bootstrap/Button'
const User = (props) =>{
//  let style ={
//         display:'inline-block',
//         margin:'20px', 
//         border:'1px solid black',
//         padding:'20px',
//         textAlign: 'center'
// } second way
    console.log(props)
    // another way
    // const{name,username,email,id} = props;
    return(
        <div className="dib m20 b1sb tac">
        {/* style ={style}  second way*/}
        {/* //  style={{ */ }
        {/* //     display:'inline-block', all this youcan put here in a div or make an object ourside the return
        //     margin:'20px', 
        //     border:'1px solid black',
        //     padding:'20px',
        //     textAlign: 'center'
        //  }} */}
            <img src={`https://robohash.org/${props.id}`}/>
            <h2>Name: {props.name}</h2>
            <h4>Username: {props.username}</h4>
            <h2>Email: {props.email}</h2>
            <Button variant="primary">Primary</Button>
            <Link href="#">Link</Link>

            {/* another way */}
            {/* <h2>Name: {name}</h2>
            <h4>Username: {username}</h4>
            <h2>Email: {email}</h2> */}
        </div>
    )
}

export default User

