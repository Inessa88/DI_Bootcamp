import React from "react";

const User = (props) => {
    const {name,username,email,id} = props;
    return(

            <div className="dib m20 b1sb tac">
                <img src={`https://robohash.org/${props.id}`} />
                <h2>{name}</h2>
                <h4>{username}</h4>
                <p>{email}</p>
            </div>


        
    )
  }
  export default User