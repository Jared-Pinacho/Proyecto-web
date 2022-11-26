import { Router } from "express";
import {getTutorados,createTutorados,getTutorado,deleteTutorado,updateTutorados} from '../controllers/tutorados.controllers'

const router = Router();

router.get('/tutorados',getTutorados);
router.post('/tutorados',createTutorados);
router.put('/tutorados/:idTutorado',updateTutorados);
router.delete('/tutorados/:idTutorado',deleteTutorado);
router.get('/tutorados/:idTutorado',getTutorado);

export default router;