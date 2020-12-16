import React from "react";
import Home from "./Home";
import {Redirect, Route, Switch} from "react-router-dom";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App1=()=>{
    return(<React.Fragment>
        <Navbar/>
        <Switch>//here we use switch to show one page from multiple page when the condition matched
          <Route exact path="/" component={Home}/> //it means URL here we need to pass the path
          <Route exact path="/contact" component={Contact}/> 
          <Route exact path="/services" component={Services}/> 
          <Route exact path="/about" component={About}/> 
          <Redirect to ="/"/>//It used to redirect the page if any other path we pass except these given
        <Home/>
        </Switch>
        <Footer/>
    </React.Fragment>)
}
export default App1