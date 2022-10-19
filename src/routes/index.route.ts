import {Router} from "express";
import { indexResponse,mainResponse,sumaParametrosResponse,
sumaParametrosFijosResponse } from "../controllers/index.controller";

const indexRouter: Router = Router();

indexRouter.get("/", indexResponse);
indexRouter.get("/main/otra/sysoi", mainResponse);
indexRouter.get("/main/operacion/suma", sumaParametrosResponse);
indexRouter.get("/main/operacion/suma_fija/:numeroA/:numeroB", sumaParametrosFijosResponse);

export default indexRouter;
