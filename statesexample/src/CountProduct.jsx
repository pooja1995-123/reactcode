import React from "react";

class CountProduct extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            product:1,
        };
    }

    incrementingQuantity=()=>{
        this.setState({product:this.state.product + 1});
    };
    
    render(){
        return(
            <div>
                <h1>Number of product:{this.state.product}</h1>
                <button type="submit" onClick={this.incrementingQuantity}>Add items</button>
            </div>
        )
    }

}
export default CountProduct;