import { Router } from "express";
import { createTutorado, deleteTutorado, updateTutorado, viewCrudTutorado, getTutorado, viewTutoradoNivel } from "../controllers/tutorado.controller";
const router = Router()

//routes /tutorado
router.get('/crud', viewCrudTutorado)
router.get('/nivel/:idTutorado', viewTutoradoNivel)

//CRUD
router.post('/crud', createTutorado)
router.get('/crud/:idTutorado', getTutorado)
router.put('/crud/:idTutorado', updateTutorado)
router.delete('/crud/:idTutorado', deleteTutorado)

export default router