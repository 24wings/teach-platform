import mongoose = require('mongoose');


var studentSchema = new mongoose.Schema({
    // 学生的名字
    name: String,
    avatar: String,
    password: String,
    gender: String,
    email: String,
    signature: String,
    createDt: { type: Date, default: Date.now },
    updateDt: { type: Date, default: Date.now },
    job: { type: String, required: true }
});


export interface IStudent extends mongoose.Document {
    avatar: string;
    name: string;
    password: string;
    gender: string;
    email: string;
    signature: string;
    job: 'student' | 'teacher';
}

export var studentModel = mongoose.model<IStudent>('Student', studentSchema);