import React from "react";
import {useSelector,useDispatch} from "react-redux";
import { IncrementCounterValue } from "../ReduxDetail/Redux/Counter.actions";
import {IncrementValue,DecrementValue} from "../AnotherCounterRedux/AnotherCounter.action";

let AnotherCounter=()=>{
        let dispatch=useDispatch();
    let AnotherCounterInfo=useSelector((state)=>{
        return state.anothercounterkey.Anothercounter;
    })

    let Increment=()=>{
        dispatch (IncrementValue());
    }
    let Decrement=()=>{
        dispatch(DecrementValue());
    }

    return(<React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header h1">One More Counter Example</div>
                                <div className="card-body">
                                    <button className="btn btn-primary" onClick={Increment}>+</button>
                                    <h2>{AnotherCounterInfo}</h2>
                                    <button className="btn btn-primary" onClick={Decrement}>-</button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

    </React.Fragment>)
}

export default AnotherCounter