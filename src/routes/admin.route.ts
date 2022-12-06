import { Router } from "express";
import { createPregunta, createTutorado, deletePregunta, viewAddPregunta, viewAddTutorado, viewAddTutoradoTable, viewTutorAdmin, viewTutorAdminLog } from "../controllers/admin.controller"
const router = Router()

// routes /admin
router.post('/', viewTutorAdmin)
router.get('/addtutorado', viewAddTutorado)
router.get('/addpregunta', viewAddPregunta)
router.post('/table', viewAddTutoradoTable)

//CRUD TUTORADO
router.post('/addtutorado', createTutorado)
router.post('/addpregunta', createPregunta)

//CRUD PREGUNTA
router.get('/', viewTutorAdminLog)
// router.post('/admin', createPregunta)
router.delete('/admin/:idPregunta', deletePregunta)


export default router