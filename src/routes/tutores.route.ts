import { Router } from 'express'
import { createTutores, deleteTutores, getTutor, getTutores, updateTutores } from '../controllers/tutores.controller'

const router = Router()

router.get('/tutores', getTutores)
router.post('/tutores', createTutores)
router.put('/tutores/:idTutor',updateTutores)
router.delete('/tutores/:idTutor',deleteTutores)
router.get('/tutores/:idTutor',getTutor)

export default router

