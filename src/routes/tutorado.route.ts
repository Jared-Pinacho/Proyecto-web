import { Router } from "express";
import { createTutorado, deleteTutorado, updateTutorado, viewTutoradoCrud, getTutorado, viewTutoradoNivel, viewTutoradoCodigo } from "../controllers/tutorado.controller";
const router = Router()

//routes /tutorado
router.get('/codigo', viewTutoradoCodigo)
router.post('/nivel', viewTutoradoNivel)

export default router