import { Router } from "express";
import { createTutor, deleteTutor, updateTutor, viewCrudTutor, getTutor, viewTutorLogin, viewTutorRegister } from "../controllers/tutor.controller";
import { createPregunta, deletePregunta, viewTutorAdmin, viewTutorAdminLog } from "../controllers/pregunta.controller";
const router = Router()

//routes /tutor
router.get('/login', viewTutorLogin)
router.get('/register', viewTutorRegister)
router.get('/crud', viewCrudTutor)
router.post('/admin', viewTutorAdmin)

//CRUD TUTOR
router.post('/register', createTutor)
router.get('/crud/:idTutor', getTutor)
router.put('/crud/:idTutor', updateTutor)
router.delete('/crud/:idTutor', deleteTutor)

//CRUD PREGUNTA
router.get('/admin', viewTutorAdminLog)
// router.post('/admin', createPregunta)
// router.delete('/admin/:idPregunta', deletePregunta)


export default router