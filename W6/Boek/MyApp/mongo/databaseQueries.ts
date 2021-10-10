import * as mongoose from 'mongoose';
import {StudentenSchema} from './studentenSchema';
import {Request, Response} from "express";

const StudentMongooseModel = mongoose.model('Studenten', StudentenSchema);

export class DatabaseQueries {

    public dummy (req: Request, res: Response){
        let data = [
            {
                "naam": "Jurson",
                "leeftijd": 17,
                "geslacht": "M"
            },
            {
                "naam": "Angelo",
                "leeftijd": 18,
                "geslacht": "M"
            },
            {
                "naam": "Shireen",
                "leeftijd": 19,
                "geslacht": "V"
            }
        ]
        StudentMongooseModel.collection.insert(data, (err, docs) => {
            if (err) {res.send(err);}
            res.json({message: 'Drie dummy studenten aangemaakt'})
        });
    }


}