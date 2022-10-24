import {Router} from "express";
import {createExample,viewFormExample} from "../controllers/example.controller"
const exampleRouter: Router = Router();

exampleRouter.post("/create",createExample);
exampleRouter.get("/view/form",viewFormExample);

export default exampleRouter;