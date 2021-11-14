/*
 the Model type extends from UnifiedModel

*/
import {Example} from '../../types/mongoose-types'
import {UnifiedModel} from '../../types/UnifiedModel'
import {Schema, ParamSchema} from "express-validator";



export interface ExampleClientObj extends UnifiedModel, Omit<Example, '_id'> {
}
export type ExampleClientObjKey = Extract<keyof ExampleClientObj, string> //from ts 2.9
// if wildcards are used we need manually tweak the type
// the goal is having inference when data model is changed
type ExampleValidationSchema = Schema &
    {
        [K in keyof Omit<Example, 'codes'>]: ParamSchema
    } & {
    ['codes.*.code']: ParamSchema
}









