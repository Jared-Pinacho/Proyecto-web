import express from 'express'
import path from 'path'
import dotenv from "dotenv";
dotenv.config();


const app = express()

//settings
app.set("port", process.env.PORT || 4000);
app.set("view engine","ejs");
app.set('views', path.join(__dirname, './views'));

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'./public')))

//routes

export default app