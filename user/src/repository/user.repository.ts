import { UserModel } from "../models/user.model";
import { AbstractRepository } from "./contracts/abstract.repository";

export class UserRepository extends AbstractRepository {
    constructor(){
        super(UserModel);
    }
}