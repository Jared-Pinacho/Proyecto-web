import { Router } from "express";
import { createPregunta, viewPregunta } from "../controllers/pregunta.controller";
const router = Router()

//routes /pregunta
router.get('/view', viewPregunta)

//CRUD
router.post('/crud', createPregunta)
// router.put('/view/:idPregunta', updatePregunta)
// router.delete('/view/:idPregunta', deletePregunta) 

export default router