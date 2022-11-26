import { Router } from "express";
import { createTutor, deleteTutor, updateTutor, viewCrudTutor, getTutor, viewTutorLogin, viewTutorRegister } from "../controllers/tutor.controller";
const router = Router()

//routes /tutor
router.get('/login', viewTutorLogin)
router.get('/register', viewTutorRegister)
router.get('/crud', viewCrudTutor)

//CRUD
router.post('/crud', createTutor)
router.get('/crud/:idTutor', getTutor)
router.put('/crud/:idTutor', updateTutor)
router.delete('/crud/:idTutor', deleteTutor)

export default router