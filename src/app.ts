import express, { Application } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import indexRouter from "./routes/index.route";
import exampleRouter from "./routes/example.route";

const app: Application = express();


//settings
app.set("port", process.env.PORT || 4000);


//middlewares
app.use(morgan("dev"));

app.use(express.json());

//routes
app.use("/", indexRouter);
app.use("/api/v1/example",exampleRouter);

export default app;
