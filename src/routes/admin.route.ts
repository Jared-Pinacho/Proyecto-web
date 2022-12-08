import { Router } from "express";
import { createPregunta, createTutorado, deletePregunta, deleteTutorado, viewAddPregunta, viewAddTutorado, viewAddTutoradoTable, viewTutorAdmin, viewTutorAdminLog } from "../controllers/admin.controller"
const router = Router()

// routes /admin
router.post('/', viewTutorAdmin)
router.get('/', viewTutorAdminLog)
router.get('/addtutorado', viewAddTutorado)
router.get('/addpregunta', viewAddPregunta)
router.post('/table', viewAddTutoradoTable)

//CRUD TUTORADO
router.post('/addtutorado', createTutorado)
router.delete('/delete/tutorado/:idTutorado', deleteTutorado)

//CRUD PREGUNTA
router.post('/addpregunta', createPregunta)
router.delete('/delete/pregunta/:idPregunta', deletePregunta)


export default router