// import { SAY_GOOD_MORNING, SAY_GOOD_AFTERNOON, SAY_GOOD_NIGHT} from "./wish-message.actions";
import {SayGoodMorning,SayGoodAfternoon,SayGoodNight} from './wish-message.actions'

// export const messagekey="message Card";
let initialState={
    message:"Hello",
};
let messageReducer=(state=initialState,action)=>{
    switch(action.type){
        case "SAY_GOOD_MORNING":
            return{
            message:"Good Morning",
            };
        case "SAY_GOOD_AFTERNOON":
            return{
                message:"Good Afternoon",
            };
        case "SAY_GOOD_NIGHT":
            return{
                message:"Good Night",
            };
        default:
            return state;

        }

}
export {messageReducer}