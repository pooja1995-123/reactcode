import React from "react";
import img2 from "../images/img2.jpg";
import Card from "./Card";
import Sdata from "../Demo/Sdata";

const Services=()=>{
    return(<React.Fragment>
        <div className="my-5">
            <h1>Our Services</h1>
            <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row gy-5">
                    {
                    Sdata.map((val,ind)=>{
                            return<Card key="ind"
                            imgscr={val.imgscr}
                            title={val.title}/>
                    })
                }

                </div>
                </div>
</div>
</div>
        </div>
    </React.Fragment>)
}

export default Services