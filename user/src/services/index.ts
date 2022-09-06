import { IAuthService } from "../interfaces/auth-service.interface";
import { IUserService } from "../interfaces/user-service.interface";
import AuthService from "./auth.service";
import UserService from "./user.service";

let authService: IAuthService;
let userService: IUserService;
if ( !authService ) {
    authService = new AuthService();
}
if ( !userService ) {
    userService = new UserService();
}

export default class Services {
    static authService(): IAuthService {
        return authService;
    }
    static userService(): IUserService {
        return userService;
    }
};