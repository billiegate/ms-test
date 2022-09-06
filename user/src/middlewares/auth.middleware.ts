import { NextFunction, Request, Response } from "express";
import Repository from "../repository";
import { decodeCursor } from "../utils";

export const isAuth = async (req: Request, res: Response, next: NextFunction) => {

    const auth = req.headers["authorization"];
    if( !auth ){
        return res.status(401).json({
            code: "98",
            message: "Bad Request",
            data: req.body
        });
    }

    const [type, token] = auth.split(" ")

    if( type.toLowerCase() !== "basic" ){
        return res.status(401).json({
            code: "98",
            message: "Invalid credentials",
            data: req.body
        })
    }

    if( !token ){
        return res.status(401).json({
            code: "98",
            message: "Bad Request",
            data: req.body
        });
    }

    const [username, password] = decodeCursor(token).split(":")

    const user = await Repository.userRepository().find({ apiKey: username, secretKey: password });

    if ( ! user ) {
        return res.status(401).json({
            "code": "98",
            "message": "Un-Authorized",
            data: req.body
        });
    }

    res.locals.user = user;
    
    next();
    
}