import { Router } from 'express';
import { mediaModel, IMedia } from '../../models';
import multer = require('multer');
import path = require('path');
import fs = require('fs');
var upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            var randomNum = req.session['randomNum'];
            var newDir = path.join(__dirname, '../../../public/uploads/' + randomNum);
            fs.existsSync(newDir) ? '' : fs.mkdirSync(newDir);
            cb(null, `public/uploads/${randomNum}/`)
        },
        filename: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname);
        }
    })
});

var router = Router();

router.route('/')
    .get(async (req, res, next) => {
        var medias = await mediaModel.find().exec();
        console.log(medias);
        res.render('teacher/index', {
            student: res.locals.student,
            medias
        });
    });

// 教师上传课件
router.route('/createNote')
    .get(async (req, res, next) => {

        res.render('teacher/createNote');
    })
    .post((req, res, next) => {
        req.session['randomNum'] = (Math.random() * 1000000).toFixed();

        next()
    }, upload.any(), async (req, res, next) => {
        var files: Express.Multer.File[] = <any>req.files;
        var urls = files.filter(file => file.fieldname == 'files').map(file => (file.destination + file.filename).substring(6));
        var media = await new mediaModel({ title: req.body.title, mediaType: req.body.mediaType, urls }).save();
        res.json({
            issuccess: true,
            data: media
        });

    })
export { router as teacherRouter };