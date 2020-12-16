
import React, { Component } from 'react'

 class EventState extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            value:"Hello",
            
        };
        this.addItem=this.addItem.bind(this);
    }
    ChangeValue=()=>{
        this.setState({value:"I Like Chocolates"})
    }
    changePara()
    {
        this.setState({value:"Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control."})
    }
    myPrice(Price)
    {
        this.setState({value:"100$"})
    }
    addItem()
    {
        this.setState({value:"I am adding one item to my cart"})
    }


    render() {
        return (
            <div className='container'>
                {/* <div className='row'> */}
                    <div className='card'>
                        <div className='card-header'>
                            <h1>{this.state.value}</h1>
                        </div>
                        <div className='card-body'>
                            <button type="submit" className="btn btn-primary mr-5"  onClick={this.ChangeValue}>Change Value</button>
                            <button type="submit" className="btn btn-warning mr-5" onClick={()=>{this.changePara()}}>Change Para</button>
                            <button type="submit" className="btn btn-danger mr-5"onClick={this.myPrice.bind(this)}>My Price</button>
                            <button type="submit" className="btn btn-info" onClick={this.addItem}>Add Item</button>
                        </div>

                    </div>

                </div>
                
            
        )
    }
}
export default EventState
