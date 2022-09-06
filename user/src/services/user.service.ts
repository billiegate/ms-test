import { CreateUserDto } from "../dto/request/create-user.dto";
import { IRepository } from "../interfaces/repository.interface";
import { IUserService } from "../interfaces/user-service.interface";
import Repository from "../repository";

export default class UserService implements IUserService {

    protected userRepository: IRepository;

    constructor() {
        this.userRepository = Repository.userRepository();
    }

    async create(createUserDto: CreateUserDto) {
        return await this.userRepository.create(createUserDto);
    }
    
    fetch(){}
    edit(createUserDto: CreateUserDto, id: number){}
    delete(id: number){}
}