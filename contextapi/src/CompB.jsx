import React from "react";
import {FirstName,LastName} from "./UserContext";

const CompB=()=>{
    return(<>
        <FirstName.Consumer>
            {(fname)=>{
                return(
                    <LastName.Consumer>
                        {(lname)=>{
                            return(<h1>I am Learning in {fname} {lname}</h1>)

                        }}
                    </LastName.Consumer>
                )

            }}
        </FirstName.Consumer>
    </>)
}
export default CompB;