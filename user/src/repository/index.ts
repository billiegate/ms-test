import { IRepository } from "../interfaces/repository.interface";
import { AuthRepository } from "./auth.repository";
import { UserRepository } from "./user.repository";

let authRepository: IRepository;
let userRepository: IRepository;
if ( !authRepository ) {
    authRepository = new AuthRepository();
}
if ( !userRepository ) {
    userRepository = new UserRepository();
}

export default class Repository {
    static authRepository(): IRepository {
        return authRepository;
    }
    static userRepository(): IRepository {
        return userRepository;
    }
};