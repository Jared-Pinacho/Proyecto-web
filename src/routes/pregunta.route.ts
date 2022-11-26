import { Router } from "express";
import { createPregunta, viewCrudPregunta, viewPregunta } from "../controllers/pregunta.controller";
const router = Router()

//routes /pregunta
router.get('/crud', viewCrudPregunta)
router.get('/view', viewPregunta)

//CRUD
router.post('/crud', createPregunta)
// router.put('/view/:idPregunta', updatePregunta)
// router.delete('/view/:idPregunta', deletePregunta) 

export default router