import express = require('express');
import moment = require('moment');

import { IStudent, studentModel, recordModel, IRecord } from '../models';

var router = express.Router();

/* GET home page. */
router.route('/')
  .get(async (req, res, next) => {
    res.render('index');

  }).post(async (req, res, next) => {
    // 默认第一步
    var user = res.locals.user;
    var record = await recordModel.update({ user: user._id }, { $set: { state: 1 } }).exec();
    res.redirect('/');
  })

export { router as indexRouter };
export { signupRouter } from './signup';
export { signoutRouter } from './signout';
export { signinRouter } from './signin';
export { studentRuter } from './student';
export { teacherRouter } from './teacher';


