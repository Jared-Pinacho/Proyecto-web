import express, { Application } from "express";
import morgan from "morgan";

import indexRouter from "./routes/index.route";


const app: Application = express();


//settings
app.set("port", process.env.PORT || 4000);


//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/", indexRouter);

export default app;
