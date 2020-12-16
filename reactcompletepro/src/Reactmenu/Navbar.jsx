import React from "react";
import {NavLink} from "react-router-dom";

const Navbar=()=>{
    return(<React.Fragment>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">   
               <nav className="navbar navbar-expand-sm navbar-light" >
        <NavLink className="navbar-brand" to="/">Web Developement</NavLink>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myMenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="myMenu">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                        <NavLink activeClassName="menu_active" exact to="/" className="nav-link">Home</NavLink></li>
                        <li className="nav-item">
                            <NavLink activeClassName="menu_active" exact to="/contact" className="nav-link">Contact</NavLink></li>
                            <li className="nav-item">
                                <NavLink activeClassName="menu_active" exact to="/services" className="nav-link">Services</NavLink></li>
                                <li className="nav-item">
                                    <NavLink activeClassName="menu_active" exact to="/about" className="nav-link">About</NavLink></li>
                                    
            </ul>
        </div>
    </nav>
</div>

</div>

</div>
    </React.Fragment>)
}

export default Navbar