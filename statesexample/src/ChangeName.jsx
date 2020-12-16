import React from "react";

class ChangeName extends React.Component
{
   constructor(props)
   {
       super(props);
       this.state={
        MyName: "Pooja",
       };
   } 
   ChangeMyName= () => {
       this.setState({MyName:"Pooja Patra"})
   }
    render(){
        return(<div>
            <h1>I am changing my name:{this.state.MyName}</h1>
            <button type="submit" onClick={this.ChangeMyName}>click on it</button>
        </div>)
    }
}
export default ChangeName;