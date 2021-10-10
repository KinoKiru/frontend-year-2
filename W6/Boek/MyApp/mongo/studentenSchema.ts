import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const StudentenSchema = new Schema ({
    naam: {type: String, required: true},
    leeftijd: {type: Number, required: true},
    geslacht: {type: String, required: true}
})