import React from "react";
// import { NavLink } from "react-router-dom";
import img1 from "../images/img1.jpg";
import Common from "./Common";
const Home=()=>{
    return(<React.Fragment>
        <Common name="Grow your carrier as a developer"
        imgsrc={img1}
        visit="/services"
        btname="Get Started"/>
    </React.Fragment>)
}

export default Home