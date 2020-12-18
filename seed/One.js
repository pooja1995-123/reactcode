const express=require("express");
const app=express();

const mongodb=require("mongodb");
const mongoclient=mongodb.MongoClient;

let local_url="mongodb://127.0.0.1:27017/";

app.get("/",(req,res)=>{
    res.send("hello");
})

mongoclient.connect(local_url,async(err,db)=>{
   let db_conn=await db.db("demodb");
   let col_conn= await db_conn.collection("biodata");
   let respose=await col_conn.find().toArray();
   
   console.log(respose);
})
app.listen(7000,(err)=>{
    console.log("server is running")
})
