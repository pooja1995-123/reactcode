import  {combineReducers}  from  "redux";
import  {messageReducer}  from "./WishMessage/wish-message.reducer";
// import {messagekey} from "./WishMessage/wish-message.reducer";
import CounterReducer from "../ReduxDetail/Redux/Counter.Reducer";
import AnotherCounterReducer from "../AnotherCounterRedux/AnotherCounter.reducer";

let rootReducer=combineReducers(
    {
        "message":messageReducer,
        "counterkey":CounterReducer,
        "anothercounterkey":AnotherCounterReducer,
    }
    );
export default rootReducer;

