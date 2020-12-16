import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {IncrementCounterValue,DecrementCounterValue} from "../ReduxDetail/Redux/Counter.actions";

let Counter=()=>{

    let dispatch=useDispatch();
    let counterInfo=useSelector((state)=>{
           return state.counterkey.counter;
    })

    let Incrementvalue=()=>{
        dispatch(IncrementCounterValue())
    }
    let Decrementvalue=()=>{
        dispatch(DecrementCounterValue())
    }
 
    return(<>
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h1>Counter Example</h1>
                </div>
                <div className="card-body">
                    <button className="btn btn-success" onClick={Incrementvalue} >+</button>
                    <h1>CounterValue:{counterInfo}</h1>
                    <button className="btn btn-danger" onClick={Decrementvalue} >-</button>
                </div>

            </div>

        </div>
    </>)
}
export default Counter