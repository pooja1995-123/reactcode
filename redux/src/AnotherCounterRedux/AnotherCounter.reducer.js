import {INCR_Value,DECR_Value} from "./AnotherCounter.action";

let initialState={
    Anothercounter:0,
}

let AnotherCounterReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case INCR_Value:
            return{
                Anothercounter:state.Anothercounter+1
            }
            case DECR_Value:
                return{
                    Anothercounter:state.Anothercounter-1
                }
                default:
                    return state
            
    }

}
 
export default AnotherCounterReducer 
