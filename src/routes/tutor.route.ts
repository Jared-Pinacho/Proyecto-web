import { Router } from "express";
import { createTutor, deleteTutor, updateTutor, viewCrudTutor, getTutor, viewTutorLogin, viewTutorRegister } from "../controllers/tutor.controller";
import { createPregunta, deletePregunta, viewTutorAdmin } from "../controllers/pregunta.controller";
const router = Router()

//routes /tutor
router.get('/admin/:idTutor/:username', viewTutorAdmin)
router.get('/login', viewTutorLogin)
router.get('/register', viewTutorRegister)
router.get('/crud', viewCrudTutor)

//CRUD TUTOR
router.post('/register', createTutor)
router.get('/crud/:idTutor', getTutor)
router.put('/crud/:idTutor', updateTutor)
router.delete('/crud/:idTutor', deleteTutor)

//CRUD PREGUNTA
router.post('/admin/:idTutor/:username', createPregunta)
router.delete('/admin/:idPregunta', deletePregunta)


export default router