import React from "react";
import {useDispatch} from "react-redux";
import {SayGoodMorning,SayGoodAfternoon,SayGoodNight} from "./../ReduxDetail/WishMessage/wish-message.actions.js";

class WishMessageCls extends React.Component{
    render(){
        let dispatch=useDispatch();

         this.gmHandler=()=>{
            dispatch(SayGoodMorning())
        }
    
        this. gaHandler=()=>{
            dispatch(SayGoodAfternoon())
        }
    
         this.gnHandler=()=>{
            dispatch(SayGoodNight())
        }


        return(<div> <div className="container">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <h4>Redux Example</h4>
                    </div>
                    <div className="card-body">
                        <h1>  {messageInfo.message}</h1>
                        <button className="btn btn-primary ml-5" onClick={gmHandler}>Good Morning</button>
                        <button className="btn btn-secondary ml-5"onClick={gaHandler}>Good Afternoon</button>
                        <button className="btn btn-success ml-5" onClick={gnHandler}>Good Night</button>
                    </div>

                </div>

            </div>
        </div>

    </div></div>)
    }
    
}