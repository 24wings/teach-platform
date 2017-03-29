import { Router } from 'express';
var router = Router();

router.route('/')
    .get(async (req, res, next) => {
        req.session.student = false;
        res.redirect('/');
    })
    .post(async (req, res, next) => {

    });
export { router as signoutRouter };