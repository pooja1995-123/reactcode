import React from "react";

class UserCart extends React.Component
{
    change=()=>{
        this.props.UserDataUpdate();
    }
    render()
    {
        return(<div>
            <h1>My name is {this.props.name}</h1>
        <h2>I am staying in {this.props.address.city}</h2>
        <h3>Available size is {this.props.size[2]}</h3>
        <h2>I want to change my address from Marathalli to {this.props.address.street}</h2>
        <button type="submit" onClick={this.change}>click to change address</button>
        </div>);
    }
}

export default UserCart;