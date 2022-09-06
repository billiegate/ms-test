import { IAuthService } from "../interfaces/auth-service.interface";
const fs = require('fs');

export default class AuthService implements IAuthService {
    logout() {
        throw new Error("Method not implemented.");
    }
    signup() {
        throw new Error("Method not implemented.");
    }
    login() {
        throw new Error("Method not implemented.");
    }

}