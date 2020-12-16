import React from "react";
import Common from "./Common";
import img2 from "../images/img2.jpg";

const About=()=>{
    return(<React.Fragment>
        <Common name="More about us "
        imgsrc={img2}
        visit="/contact"
        btname="Contact for more"/>
    </React.Fragment>)
}

export default About