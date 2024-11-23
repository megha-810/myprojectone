//route level middleware
import express from 'express';
import path from 'path';
import url from 'url';
import bodyParser from 'body-parser';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app=express();

//to link router
import IndexRouter from './routes/index.router.js';
import AdminRouter from './routes/admin.router.js';

//configuration to fetch req body content : body parser middleware
//used to fetch req data from methods like : POST , PUT , PATCH , DELETE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//configuration to load template page
app.set("view engine","ejs");
app.set("views","./views");

//configuration to load static files
const staticpath=path.join(__dirname,"public/");
app.use(express.static(staticpath));

//router level middleware to load router
app.use('/admin',AdminRouter);
app.use('/',IndexRouter);

app.listen(3000);
console.log("server invoked to link http://localhost:3000");