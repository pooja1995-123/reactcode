export const INCR_Value="INCR_Value";
export const DECR_Value="DECR_Value";

let IncrementValue=()=>{
    return{
        type:INCR_Value,
        payload:"Used for Increment the value",
    };
}

let DecrementValue=()=>{
    return{
    type:DECR_Value,
    payload:"Used for Decrement the value",
};
}

export {IncrementValue,DecrementValue}