import { Schema } from 'joi';
import { Request, Response, NextFunction } from 'express'

export const validate = ( schema : Schema ) => async (req : Request, res : Response , next : NextFunction) => {
    const {error} = schema.validate(req.body);
    console.log("validation check", error)
    if(!error) next();
    else{
        res.status(400).send({
            code: "83",
            message: error.message || "validation error",
            data: error.details[0]?.path
        })
    }
};