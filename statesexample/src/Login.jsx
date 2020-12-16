import React from "react";
import UserCart from "./UserCart";
class Login extends React.Component
{
    state={
    name:"Pooja",
    address:{
        street:"Marathalli",
        houseNo:"458",
        city:"Banglore",
    },
    size:[25,36,58],
    UserDataUpdate:()=>
    {
         console.log("HEllo")
        this.setState({
           })

           
    }
    }

    render()
    {
        return(<div>
            <UserCart
            name={this.state.name}
            address={this.state.address}
            size={this.state.size}
            UserDataUpdate={this.state.UserDataUpdate}/>
        </div>);
    }
    
}
export default Login;

