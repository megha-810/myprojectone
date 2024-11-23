//url routing & method checking
import express from 'express';
const app=express();

const urlRoute="<h2>Click on the link below to redirect</h2><a href='/'>Home Page</a><br/><br/><a href='/about'>About Page</a><br/><br/><a href='/contact'>Contact Page</a><br/><br/><a href='/service'>Service Page</a><br/><br/><a href='/register'>Register Page</a><br/><br/><a href='/login'>Login Page</a>";

app.get("/",(req,res)=>{
 res.send("<h1>/ or /home url invoked</h1>"+urlRoute);
});

app.get("/about",(req,res)=>{
 res.send("<h1>/about url invoked</h1>"+urlRoute);
});

app.get("/contact",(req,res)=>{
 res.send("<h1>/contact url invoked</h1>"+urlRoute);
});

app.get("/service",(req,res)=>{
 res.send("<h1>/service url invoked & method GET</h1>"+urlRoute);
});

app.post("/service",(req,res)=>{
 res.send("<h1>/service url invoked & method POST</h1>"+urlRoute);
});

app.put("/service",(req,res)=>{
 res.send("<h1>/service url invoked & method PUT</h1>"+urlRoute);
});

app.patch("/service",(req,res)=>{
 res.send("<h1>/service url invoked & method PATCH</h1>"+urlRoute);
});

app.delete("/service",(req,res)=>{
 res.send("<h1>/service url invoked & method DELETE</h1>"+urlRoute);
});

app.get("/register",(req,res)=>{
 res.send("<h1>/register url invoked</h1>"+urlRoute);
});

app.get("/login",(req,res)=>{
 res.send("<h1>/login url invoked</h1>"+urlRoute);
});

//for anonymous url route
app.all("*",(req,res)=>{
 res.send("<h1>Invalid url invoked</h1>");
})

app.listen(3000);
console.log("server invoked to link http://localhost:3000");