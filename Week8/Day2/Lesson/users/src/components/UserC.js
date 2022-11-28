import React from 'react';

class UserC extends React.Component{
    constructor(){
        super()
        this.state = {
            name: 'Mmmmm'
        }
    }
    render(){
        const {name,username,email} = this.props
        return (
            <div>
                <h2>{this.state.name}</h2>
                <h2>{username}</h2>
                <h2>{email}</h2>
                My Class Component
            </div>
        )
    }
}

export default UserC