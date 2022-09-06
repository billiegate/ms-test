import { AuthModel } from "../models/auth.model";
import { AbstractRepository } from "./contracts/abstract.repository";

export class AuthRepository extends AbstractRepository {
    constructor(){
        super(AuthModel);
    }
}