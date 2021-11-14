import {ExampleDocument, ExampleModel, ExampleSchema} from '../../types/mongoose-types'

import {model, Schema} from 'mongoose'

const ExampleSchema: ExampleSchema =
    new Schema
    ({
        myCustomField: {type: String, required: true},
        password: {type: String, required: true},
        firstName: {type: String, required: true},
        email: {type: String, required: true},
        someField: {type: String, required: true},
        codes: [{code: {type: Number, required: true}}]
    })


const Example = model<ExampleDocument, ExampleModel>('Example', ExampleSchema)

export default Example



