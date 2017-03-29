import { Router } from 'express';
import { checkStudentLogin } from '../../middlewares';

var router = Router();
router.route('/')
    .get(checkStudentLogin, async (req, res, next) => {
        res.render('student/index');
    });

export { router as studentRuter };

