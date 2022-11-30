import express, { Application } from "express";
import morgan from "morgan";
import path from "path"
import dotenv from "dotenv";
dotenv.config();

import indexRouter from "./routes/index.route";
import exampleRouter from "./routes/example.route";
import exampleV2Router from "./routes/example.v2.route";
import logginRouter from "./routes/loggin.router";

import turoresRoutes from './routes/tutores.route'
import tutoradosRoutes from './routes/tutorados.route'

import { TutorModel } from "./models/tutor.model";

const app: Application = express();


//settings
app.set("port", process.env.PORT || 4000);
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './views'));



//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname,'./public')))
app.use(express.static(path.join(__dirname, './public')));


//routes
/*app.use("/", indexRouter);
app.use("/registro",registro);
app.use("/api/v1/example",exampleRouter);
app.use("/api/v2/example",exampleV2Router);
app.use("/view/loggin",logginRouter);*/

app.use(turoresRoutes)
app.use(tutoradosRoutes)







app.get("/registro", (req, res) => {
    res.render("registro-view");
})

app.get("/inscribe", (req, res) => {
    res.render("inscribe-view");
})

app.get("/dash", (req, res) => {
    res.render("dashboard-view");
})

app.get("/", (req, res) => {
    res.render("inicio-view");
})

app.get("/nivel", (req, res) => {
    res.render("nivel-view");
})



export default app;
