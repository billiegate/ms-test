import { CustomException } from './custom.exception';

export class NotFoundExecption extends CustomException {

    reason = "This resource is not found"
    statusCode = 94;

    constructor( messesage = null ){
        super( messesage || "This resource is not found");
        Object.setPrototypeOf(this, CustomException.prototype)
    }

    serializeErrors(){
        return [
            {message : this.reason}
        ]
    }
}