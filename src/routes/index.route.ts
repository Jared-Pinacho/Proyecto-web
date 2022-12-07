import { Router } from "express";
const router = Router()

//routes localhost:4000/
router.get('/', (req, res) => {
    res.render('index');
});

export default router