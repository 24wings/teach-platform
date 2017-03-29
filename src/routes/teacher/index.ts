import { Router } from 'express';
var router = Router();

router.route('/')
    .get(async (req, res, next) => {
        res.render('teacher/index');
    });
export { router as teacherRouter };