import { ExtendableError } from "ts-error"

export abstract class CustomException extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        super(message)
        //needed when you are extending a built in class in javascript
        Object.setPrototypeOf(this, CustomException.prototype)
    }

    abstract serializeErrors(): { message: string; field?: string }[]
}