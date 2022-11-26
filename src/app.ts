import express from 'express'
import path from 'path'
import dotenv from "dotenv";
dotenv.config();

import tutorRouter from "./routes/tutor.route";
import preguntaRouter from "./routes/pregunta.route";
import tutoradoRouter from "./routes/tutorado.route";

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
app.use('/tutor', tutorRouter) 
app.use('/pregunta', preguntaRouter) 
app.use('/tutorado', tutoradoRouter) 

export default app