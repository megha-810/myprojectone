import express from 'express';
const app=express();
//Application level middleware : for all route

app.use((req,res,next)=>{
    console.log("Application level middleware invoked");
    next();
});

app.use("/",(req,res,next)=>{
    console.log("Application level niddleware invoked");
    next();
});

// Application level middleware : for specific route

app.use("/about",(req,res,next)=>{
    console.log("Application level middleware invoked");
    next();
});

app.get("/",(req,res)=>{
 
});
app.listen(3000);
console.log("server invoked to link http://localhost:3000");