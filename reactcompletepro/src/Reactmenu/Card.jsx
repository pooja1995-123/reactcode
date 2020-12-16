import React from "react";
import { NavLink } from "react-router-dom";
import img2 from "../images/img2.jpg";

const Card=(props)=>{
    return(<React.Fragment>
        
                    <div className="col-md-4 mx-auto">
                    <div className="card" >
                    <img src={props.imgsrc} class="card-img-top" alt="not found"/>
                     <div className="card-body">
                      <h5 className="card-title">{props.title}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
                    </div>
                
    </React.Fragment>)
}

export default Card