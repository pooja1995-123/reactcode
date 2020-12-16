// import {IncrementCounterValue,DecrementCounterValue} from "./Counter.actions.js";
import {Increment_Counter_Value,Decrement_Counter_Value} from "./Counter.actions";

let initialState={
    counter:0,
}

let CounterReducer=(state=initialState,action)=>{
        switch(action.type){
            case Increment_Counter_Value:
                return{
                    counter:state.counter+1,

                }
                case Decrement_Counter_Value:
                    return{
                        counter:state.counter-1,

                    }
                default:
                    return state;    
        }
}
export default CounterReducer;

