import Info from "./info.json";
import React from 'react';

class Example1 extends React.Component{
    constructor(){
        super();

    }


   

    render(){
        const {SocialMedias} = Info
        const listItems = SocialMedias.map((sm) =>
        <li>{sm}</li>
      );
        return(
            <div>
                <ul style={{textAlign: "start"}}>{listItems}</ul>
            </div>
    )
    
}
    
}

export default Example1


