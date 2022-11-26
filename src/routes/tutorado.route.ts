import { Router } from "express";
import { createTutorado, deleteTutorado, updateTutorado, viewTutoradoCrud, getTutorado, viewTutoradoNivel, viewTutoradoCodigo } from "../controllers/tutorado.controller";
const router = Router()

//routes /tutorado
router.get('/codigo', viewTutoradoCodigo)
router.get('/crud', viewTutoradoCrud)
router.get('/nivel/:idTutorado', viewTutoradoNivel)

//CRUD
router.post('/crud', createTutorado)
router.get('/crud/:idTutorado', getTutorado)
router.put('/crud/:idTutorado', updateTutorado)
router.delete('/crud/:idTutorado', deleteTutorado)

export default router