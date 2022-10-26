import {Router} from "express";
import {createExample,updateExample,deleteExample,getData,viewFormEditExample,viewFormExample} from "../controllers/example.controller"
const exampleRouter: Router = Router();

exampleRouter.post("/create",createExample);
exampleRouter.post("/update/:idStatus",updateExample);
exampleRouter.get("/delete/:idStatus",deleteExample);
exampleRouter.get("/listar",getData);

exampleRouter.get("/view/form",viewFormExample);
exampleRouter.get("/view/form-edit/:idStatus",viewFormEditExample);


export default exampleRouter;