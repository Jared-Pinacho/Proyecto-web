import { Router } from "express";
import { viewTutoradoNivel, viewTutoradoCodigo, viewTutoradoBeginner, viewTutoradoNivelLog } from "../controllers/tutorado.controller";
const router = Router()

//routes /tutorado
router.get('/codigo', viewTutoradoCodigo)
router.get('/nivel', viewTutoradoNivelLog)
router.post('/nivel', viewTutoradoNivel)
router.get('/beginner', viewTutoradoBeginner)

export default router