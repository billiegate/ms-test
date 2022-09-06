import { CreateUserDto } from "../dto/request/create-user.dto";

export interface IUserService {
    create(createUserDto: CreateUserDto);
    fetch();
    edit(createUserDto: CreateUserDto, id: number);
    delete(id: number);
}