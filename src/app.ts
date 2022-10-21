import express, { Application } from "express";
import morgan from "morgan";
import path from "path"
import dotenv from "dotenv";
dotenv.config();

import indexRouter from "./routes/index.route";
import exampleRouter from "./routes/example.route";

const app: Application = express();


//settings
app.set("port", process.env.PORT || 4000);
app.set('views', path.join(__dirname, './views'));
app.set("view engine","ejs");


//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname,'./public')))

//routes
app.use("/", indexRouter);
app.use("/api/v1/example",exampleRouter);

export default app;
