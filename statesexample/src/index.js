import React from 'react';
import ReactDOM from 'react-dom';
//  import CountProduct from './CountProduct';
//import ChangeName from './ChangeName';
// import ChangePara from "./ChangePara";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from "./Login";
import NavBar from "./NavBar";

ReactDOM.render( 
<div>
    <NavBar/>
    <Login />
</div>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
