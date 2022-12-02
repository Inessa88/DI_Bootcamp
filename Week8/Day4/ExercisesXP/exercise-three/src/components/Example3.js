import Info from "./info.json";
import React from 'react';

class Example3 extends React.Component{
    constructor(){
        super();

    }

    render(){
        const {Experiences} = Info
        const [first, second] = Experiences
        const firstArea = Object.values(first['roles'][0]).map((r, i) => <p key={i}>{r}</p>)

        const firstResult = <><img src={first['logo']}/><h6>{first['companyName']}</h6></>


        const secondArea = Object.values(second['roles'][0]).map((r, i) => <p key={i}>{r}</p>)

        const secondResult = <><img src={second['logo']}/><h6>{second['companyName']}</h6></>

        return <>{firstResult}{firstArea}{secondResult}{secondArea}</>

        }

}

export default Example3

