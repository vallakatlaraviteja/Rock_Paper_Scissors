const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/first.html");
});

app.listen(PORT,()=>{
    console.log("server  intiated!!");
});

app.get("/script.js",(req,res)=>{
    res.sendFile(__dirname + "/" + "/script.js");
});

app.get("/style.css",(req,res)=>{
    res.sendFile(__dirname + "/" + "/style.css");
});