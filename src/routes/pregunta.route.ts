import { Router } from "express";
import { saveLeccion, viewPreguntaAdvanced, viewPreguntaBeginner, viewPreguntaIntermediate } from "../controllers/pregunta.controller";
const router = Router()

//routes /pregunta
router.get('/beginner', viewPreguntaBeginner)
router.get('/intermediate', viewPreguntaIntermediate)
router.get('/advanced', viewPreguntaAdvanced)
router.post('/beginner', saveLeccion)
router.post('/intermediate', saveLeccion)
router.post('/advanced', saveLeccion)

//CRUD
// router.post('/crud', createPregunta)
// router.put('/view/:idPregunta', updatePregunta)
// router.delete('/view/:idPregunta', deletePregunta) 

export default router