import {RequestHandler} from "express";
import {ExampleService} from './service'
import {ExampleObject} from "../../types/mongoose-types";
import {ExampleClientObjKey} from "./types";



let exampleService = new ExampleService()

export const addExample: RequestHandler = async (req, res, next) => {
    try {
        let _id: ExampleObject['_id']
        _id = await exampleService.create(req.body)
        res.status(201).json({_id: _id})
    } catch (err) {
        next(err)
    }
}
export const allExamples: RequestHandler = async (req, res, next) => {
    try {
        const { sort = 'createdAt' , limit = '25', index = '0'} = req.params
        let objs: Array<ExampleObject>
        objs = await exampleService.getAllPaged( sort as ExampleClientObjKey , limit , index)
        res.status(200).json(objs)
    } catch (err) {
        next(err)
    }

}
export const oneExample: RequestHandler = async (req, res, next) => {
    try {
        let _id: ExampleObject['_id'] = req.body._id
        let obj: ExampleObject | null =
            await exampleService.searchOne(_id)
        obj
            ? res.status(200).json({_id: obj._id})
            : res.status(204)

    } catch (err) {
        next(err)
    }
}
export const updateExample: RequestHandler = async (req, res, next) => {
    try {
        let obj: ExampleObject | null
        obj = await exampleService.replaceOne(req.body)
        obj
            ? res.status(200).json({_id: obj._id})
            : res.status(204)
    } catch (err) {
        next(err)
    }
}
export const removeExample: RequestHandler = async (req, res, next) => {
    try {
        let _id: ExampleObject['_id'] | null
        _id = await exampleService.deleteOne(req.body)
        _id
            ? res.status(200).json({_id})
            : res.status(204)
    } catch (err) {
        next(err)
    }
}