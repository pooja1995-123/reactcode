import React, { createContext } from "react";
import CompB from "./CompB";


const FirstName=createContext();
const LastName=createContext();
const UserContext=()=>{
  
    return(<>

    <FirstName.Provider value="Prostack">
        <LastName.Provider value="Academy">
                <CompB/>
        </LastName.Provider>

    </FirstName.Provider>
    
    </>)
}

export {UserContext,FirstName,LastName};