export const SAY_GOOD_MORNING="SAY_GOOD_MORNING";
export const SAY_GOOD_AFTERNOON="SAY_GOOD_AFTERNOON";
export const SAY_GOOD_NIGHT="SAY_GOOD_NIGHT";

let SayGoodMorning =()=>{
    return{
        type:"SAY_GOOD_MORNING",
        payload:"Good Morning Message",
    }
};
let SayGoodAfternoon=()=>{
    return{
        type:"SAY_GOOD_AFTERNOON",
        payload:"Good Afternoon Message",
    }
};
let SayGoodNight=()=>{
    return{
        type:"SAY_GOOD_NIGHT",
        payload:"Good Night Message"
    }
};

export {SayGoodMorning,SayGoodAfternoon,SayGoodNight}
