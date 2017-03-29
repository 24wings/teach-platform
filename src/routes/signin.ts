import express = require('express');
import { checkParamsFromBody } from '../middlewares';

import { studentModel, IStudent, articleModel, IArticle } from '../models';

var router = express.Router();

router.route('/')
    .get(async (req, res, next) => {
        res.render('signin');
    })
    .post(checkParamsFromBody('name', 'password'), async (req, res, next) => {
        var { name, password } = req.body;
        console.log(req.body)
        var student = await studentModel.findOne({ name, password }).exec();
        if (student) {
            if (student.job == 'student') {
                req.session.student = student;
                res.redirect('/student/');
            } else {
                req.session.student = student;
                res.redirect('/teacher/')

            }
        } else {
            res.render('signin', {
                error: '用户名或密码错误'
            });
        }
    });



export { router as signinRouter };