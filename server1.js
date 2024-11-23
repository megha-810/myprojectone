import express from 'express';
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>/ or /home url invoked</h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>/about url invoked</h1>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>/contact url invoked</h1>");
});

app.get("/service",(req,res)=>{
    res.send("<h1>/servicen url invoked</h1>");
});

app.get("/register",(req,res)=>{
    res.send("<h1>/register url invoked</h1>");
});


app.get("/login",(req,res)=>{
    res.send("<h1>/login url invoked</h1>");
});

app.listen(3000);
console.log("server invoked to link http://localhost:3000");