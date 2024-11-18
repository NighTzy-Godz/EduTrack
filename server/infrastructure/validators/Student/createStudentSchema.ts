import Joi from 'joi'
import { Gender } from '../../../domain/entities/GlobalEnum'

const createStudentSchema = Joi.object({
    first_name: Joi.string().required().messages({
        "any.required": "First Name is a required field",
        "string.base": "First Name should be a type of string",
        "string.empty": "First Name cannot be empty"
    }),

    last_name: Joi.string().required().messages({
        "any.required": "Last Name is a required field",
        "string.base": "Last Name should be a type of string",
        "string.empty": "Last Name cannot be empty"
    }),

    gender: Joi.string().valid(...Object.values(Gender)).required().messages({
        "any.required": "Gender is a required field",
        "string.base": "Gender should be a type of string",
        "string.empty": "Gender cannot be empty",
        "any.only": "Gender should be only MALE or FEMALE"
    }),

    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            "any.required": "Email is a required field",
            "string.base": "Email should be a type of string",
            "string.empty": "Email cannot be empty",
            "string.email": "Email must be a valid email address",
        }),
})

export default createStudentSchema