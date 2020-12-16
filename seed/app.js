import express from "express";//instead of const express=require('express')

import morgan from "morgan";//used for http request logger
const app=express();


app.use(morgan("dev"));

app.get('/',(req,res)=>{
    res.send("home page");
})

app.get('/about',(req,res)=>{
    res.send("about us page");
})

app.get('/contact',(req,res)=>{
    res.send("contact us page");
})

app.listen(5000,(err)=>{
    console.log("server is running");
})

