import _ from 'underscore'
import mongoose from "mongoose";

import {checkSchema} from 'express-validator'
import {removeFieldsSanitizer} from "../../middlewares/Sanitizers";

import {ExampleValidationSchema} from "./types";


//List of Validators: https://github.com/validatorjs/validator.js#validators

const validationSchema: ExampleValidationSchema =
    {
        _id: {
            // The location of the field, can be one or more of body, cookies, headers, params or query.
            // If omitted, all request locations will be checked
            in: ['body'],
            errorMessage: 'malformed ID, must be a valid mongo ObjectId ',
            isString: true,
            custom: {
                options: (value, {req, location, path}) => {
                    return mongoose.isValidObjectId(value)
                },
                bail: true
            }
        },
        myCustomField: {
            // Custom validators
            custom: {
                options: (value, {req, location, path}) => {
                    return true
                },
            },
            // and sanitizers
            customSanitizer: {
                options: (value, {req, location, path}) => {
                    let sanitizedValue;

                    if (req.body.foo && location && path) {
                        sanitizedValue = parseInt(value);
                    } else {
                        sanitizedValue = 0;
                    }

                    return sanitizedValue;
                },
            },
        },
        password: {
            isLength: {
                errorMessage: 'Password should be at least 7 chars long',
                // Multiple options would be expressed as an array
                options: {min: 7},
            },
        },
        firstName: {
            isUppercase: {
                // To negate a validator
                negated: true,
            },
            rtrim: {
                // Options as an array
                options: [' ']
            },
        },
        // Support bail functionality in schemas
        email: {
            isEmail: {
                bail: true,
            },
        },
        // Support if functionality in schemas
        someField: {
            isInt: {
                if: (value: any) => {
                    return value !== ''
                },
            },
        },
        // Wildcards/dots for nested fields work as well
        'codes.*.code': {
            // Make this field optional when undefined or null
            optional: {options: {nullable: true}},
            isBase64: {
                options: {urlSafe: true}
            },
        },
    }

const validationSchemaNoID =
    {..._.omit<ExampleValidationSchema, string>(validationSchema, '_id')}

export const validateExampleUpdate = [
    checkSchema(validationSchema)
]


export const validateExampleCreate = [
    removeFieldsSanitizer(['_id']),
    checkSchema(validationSchemaNoID),
]

