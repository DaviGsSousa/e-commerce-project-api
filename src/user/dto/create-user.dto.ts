import {IsNotEmpty} from "class-validator";

export class CreateUserDto {

    @IsNotEmpty({
        message: "User name should not be empty"
    })
    name: string;

    @IsNotEmpty({
        message: "User email should not be empty"
    })
    email: string;

    status: boolean;
}
