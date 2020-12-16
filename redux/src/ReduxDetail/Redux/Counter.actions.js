 export const Increment_Counter_Value="Increment_Counter_Value";
 export const Decrement_Counter_Value="Decrement_Counter_Value";

let IncrementCounterValue=()=>{
   return{
    type:Increment_Counter_Value,
    payload:"Counter value incremented",
   };
}

let DecrementCounterValue=()=>{
    return{
        type:Decrement_Counter_Value,
        payload:"Counter value decremented",
    };
}


export {IncrementCounterValue,DecrementCounterValue}
