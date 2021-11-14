import Example from "./model";
import {ExampleObject} from "../../types/mongoose-types";
import {ExampleClientObjKey} from "./types";

export class ExampleService {

    create = async (obj: ExampleObject) => {
        let doc = new Example(obj)
        let savedDoc = await doc.save()
        return savedDoc._id
    }

    getAllPaged = async (sort: ExampleClientObjKey, limit: string, index: string ) => {
        let docs: Array<ExampleObject> = await Example
            .find()
            .sort(sort)
            .limit( parseInt(limit) )
            .skip( (parseInt(limit) * parseInt(index)) )
            .exec()
        return docs
    }

    searchOne = async (_id: ExampleObject['_id']) => {
        let doc: ExampleObject | null = await Example
            .findById(_id)
            .exec()
        return doc
    }

    replaceOne = async (obj: ExampleObject) => {
        let doc: ExampleObject | null = await Example
            .findByIdAndUpdate(obj._id, obj)
            .exec()
        return doc
    }

    deleteOne = async (_id: ExampleObject['_id']) => {
        let doc: ExampleObject | null = await Example
            .findByIdAndDelete(_id)
            .exec()
        return doc ? doc._id : null
    }
}

