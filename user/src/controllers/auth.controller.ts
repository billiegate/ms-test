import { CreateUserDto } from "../dto/request/create-user.dto";
import { IAuthService } from "../interfaces/auth-service.interface";
import Services from "../services";

class _AuthController {

    private authService: IAuthService;

    constructor(){
        this.authService = Services.authService();
    }

    async signup() {
        return await this.authService.signup();
    }

    async login(create: CreateUserDto ) {
        return await this.authService.login();
    }

    async logout(create: CreateUserDto ) {
        return await this.authService.logout();
    }

}

export const AuthController = new _AuthController();