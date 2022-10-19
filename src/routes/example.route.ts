import {Router} from "express";
import {createExample} from "../controllers/example.controller"
const exampleRouter: Router = Router();

exampleRouter.get("/create/:idStatus/:status/:description",createExample);

export default exampleRouter;