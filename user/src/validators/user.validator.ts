import * as Joi from 'joi';

export const UserValidation = Joi.object().keys({
    name : Joi.required()
});