import express = require('express');
import { studentModel, recordModel, IRecord } from '../../models';

var router = express.Router();

router.route('/')
    .get(async (req, res, next) => {
        var boys = await studentModel.find({ gender: '男' }).exec();
        var girls = await studentModel.find({ gender: '女' }).exec();
        res.render('admin', {
            boys,
            girls
        });
    })
    .post(async (req, res, next) => {

    });

export { router as adminRouter };