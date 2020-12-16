import React, { Component } from "react";

class ChangePara extends React.Component
{
    constructor(props) {
        super(props);
       
        this.state = {
            name: "Web developing",
        };    
    }
    changeName() {
        this.setState({ name:"React is a JavaScript library that aims to simplify development of visual interfaces" });
    };
    render()
    {
        return(<div>
            <h1>Change the Paragraph: {this.state.name}</h1>
            <button type="submit" onClick={()=>{this.changeName();}}>Change My Paragraph</button>
        </div>)
    }
}
export default ChangePara;