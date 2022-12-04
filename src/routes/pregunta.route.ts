import { Router } from "express";
import { viewPreguntaBeginner } from "../controllers/pregunta.controller";
const router = Router()

//routes /pregunta
router.get('/beginner', viewPreguntaBeginner)

//CRUD
// router.post('/crud', createPregunta)
// router.put('/view/:idPregunta', updatePregunta)
// router.delete('/view/:idPregunta', deletePregunta) 

export default router