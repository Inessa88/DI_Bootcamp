import Info from "./info.json";
import React from 'react';

class Example2 extends React.Component{
    constructor(){
        super();

    }

    render(){
        const {Skills} = Info
        const [first, second] = Skills
        const firstList = first['SkillSet'].map((s, i) => <li key={i}>{s['Name']}</li>)

        const firstResult = <><h2 style={{textAlign: "start"}}>{first['Area']}</h2><ul style={{textAlign: "start"}}>{firstList}</ul></>

        const secondList = second['SkillSet'].map((s, i) => <li key={i}>{s['Name']}</li>)

        const secondResult = <><h2 style={{textAlign: "start"}}>{second['Area']}</h2><ul style={{textAlign: "start"}}>{secondList}</ul></>
        return <>{firstResult}{secondResult}</>

        }

        
        

    
}


export default Example2

