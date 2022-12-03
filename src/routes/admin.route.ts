import { Router } from "express";
import { createPregunta, deletePregunta, viewTutorAdmin, viewTutorAdminLog } from "../controllers/admin.controller"
const router = Router()

// routes /admin
router.post('/', viewTutorAdmin)

//CRUD PREGUNTA
router.get('/', viewTutorAdminLog)
// router.post('/admin', createPregunta)
// router.delete('/admin/:idPregunta', deletePregunta)


export default router