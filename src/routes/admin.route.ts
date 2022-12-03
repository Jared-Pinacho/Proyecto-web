import { Router } from "express";
import { createPregunta, createTutorado, deletePregunta, viewAddTutorado, viewTutorAdmin, viewTutorAdminLog } from "../controllers/admin.controller"
const router = Router()

// routes /admin
router.post('/', viewTutorAdmin)
router.get('/addtutorado', viewAddTutorado)

//CRUD TUTORADO
router.post('/addtutorado', createTutorado)

//CRUD PREGUNTA
router.get('/', viewTutorAdminLog)
// router.post('/admin', createPregunta)
// router.delete('/admin/:idPregunta', deletePregunta)


export default router