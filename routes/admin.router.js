import express from 'express';
import url from 'url';
const router = express.Router();

router.get("/",(req,res)=>{
 res.send("<h1>/ or /adminhome url invoked , admin panel</h1>");
});

router.get("/manageusers",(req,res)=>{
 var users=url.parse(req.url,true).query;
 console.log("Username = "+users.username);
 console.log("Password = "+users.password);
 res.send("<h1>/manageusers url invoked , admin panel & method GET</h1>");
});

router.post("/manageusers",(req,res)=>{
 console.log(req.body);   
 res.send("<h1>/manageusers url invoked , admin panel & method POST</h1>");
});

router.get("/addcategory",(req,res)=>{
 res.send("<h1>/addcategory url invoked , admin panel</h1>");
});


export default router;