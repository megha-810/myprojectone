import express from 'express';
const app=express();


app.get("/",(req,res)=>{
    res.send("<h1>welcome to the world of Express server</h1>");
});

app.listen(3000);
console.log("server invoked to link http://localhost:3000");