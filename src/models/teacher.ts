import mongoose = require('mongoose');


var teacherSchema = new mongoose.Schema({
    // 老师的名字
    name: String,
    avatar: String,
    password: String,
    gender: String,
    email: String,
    signature: String,
    createDt: { type: Date, default: Date.now },
    updateDt: { type: Date, default: Date.now }
});


export interface ITeacher extends mongoose.Document {
    avatar: string;
    name: string;
    password: string;
    gender: string;
    email: string;
    signature: string;
}

export var teacherModel = mongoose.model<ITeacher>('Teacher', teacherSchema);