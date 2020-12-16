import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../images/img1.jpg";
const Common=(props)=>{
    return(<React.Fragment>
       <section id="header" className="d-flex align-items-center">
       <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row"> 
                <div className="col-md-6 pt-5 pt-lg-0">
                    <h1 className="mt-5">{props.name}</h1>
                    <h2 className="my-5">We are developer team</h2>
                    <div className="mt-5">
                        <NavLink to={props.visit} className="btn btn-primary">{props.btname}</NavLink>
                    </div>
                 </div> 
                 <div className="col-md-6 mt-5">
                    <div className="header-image">
                        <img src={props.imgsrc} className="img-fluid animated" alt="Common img"/>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </div>
       </section>
    </React.Fragment>)
}

export default Common