import {Router} from "express";
import {createExample,getExample,getExampleById} from "../controllers/example.v2.controller";
const exampleRouter: Router = Router();

exampleRouter.get("/",getExample);
exampleRouter.post("/",createExample);
exampleRouter.get("/:idStatus",getExampleById);

export default exampleRouter;