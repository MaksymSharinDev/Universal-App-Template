/*
 the Model type extends from UnifiedModel

*/
import {Example} from '../../types/mongoose-types'
import {UnifiedModel} from '../../types/UnifiedModel'
import {Schema, ParamSchema} from "express-validator";


export interface ExampleClientObj extends UnifiedModel, Omit<Example,'_id'> {}
// the goal is having inference when data model is changed
type ExampleValidationSchema = Schema & Example |
// if wildcards are used we need manually tweak the type
    Schema &
    Omit< Example ,'codes' > &
    {'codes.*.codes': ParamSchema }








