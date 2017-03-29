import mongoose = require('mongoose');

var mediaSchema = new mongoose.Schema({
    mediaType: String,// video,pdf,text,html,othder
    title: String,
    links: { type: [String], default: [] },
    createDt: { type: Date, default: Date.now },
    updateDt: { type: Date, default: Date.now }
});
export interface IMedia extends mongoose.Document {
    mediaType: String;
    title: String;
    urls: String[];
    createDt: Date,
    updateDt: Date,
}

export var mediaModel = mongoose.model<IMedia>('Media', mediaSchema);