// const express=require("express");
import express from "express";
const app=express();

// const mongodb=require("mongodb");
import mongodb from "mongodb";
const mongoclient=mongodb.MongoClient;

let local_url="mongodb://127.0.0.1:27017/";
let res;

app.get("/",(req,res)=>{
    res.send(res[0]);
})

mongoclient.connect(local_url, async (err,db)=>{
   let db_conn= await  db.db("demodb");
   let col_conn=  db_conn.collection("biodata");
   let respose=  col_conn.find().toArray();
   console.log(respose[0])
   
   res = respose;
})
app.listen(7000,(err)=>{
    console.log("server is running")
})
