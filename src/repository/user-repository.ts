import {CreateUserDto} from "../user/dto/create-user.dto";

export abstract class UserRepository{
    protected constructor(private CreateUserDto) {}
    abstract create(user: CreateUserDto): Promise<void>;
}