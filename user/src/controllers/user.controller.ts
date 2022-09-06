import { CreateUserDto } from "../dto/request/create-user.dto";
import { IUserService } from "../interfaces/user-service.interface";
import Services from "../services";

class _UserController {
    private userService: IUserService;

    constructor(){
        this.userService = Services.userService();
    }

    async fetch() {
        return await this.userService.fetch();
    }

    async create(create: CreateUserDto ) {
        return await this.userService.create(create);
    }

    async edit(create: CreateUserDto ) {
        return await this.userService.edit(create, 1);
    }

    async delete() {
        return await this.userService.delete(1);
    }
}

export const UserController = new _UserController();