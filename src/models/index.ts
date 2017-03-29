import mongoose = require('mongoose');
mongoose.connect('mongodb://120.77.169.182/test');


export { studentModel, IStudent } from './student';
export { IArticle, articleModel } from './articles';
export { mediaModel, IMedia } from './media';

