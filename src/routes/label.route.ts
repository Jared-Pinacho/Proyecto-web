import { Router } from "express";
import { createLabelSolicitude, getStatusLabelSolicitude, downloadFile } from "../controllers/label.controller";

const labelRouter: Router = Router();

labelRouter.post("/", createLabelSolicitude);
labelRouter.get("/status/:idSolicitude", getStatusLabelSolicitude);
labelRouter.get("/download/:idSolicitude", downloadFile);

export default labelRouter;
