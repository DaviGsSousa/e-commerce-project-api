import {randomUUID} from "node:crypto";
import {PrismaService} from "../../database/prisma.service";
import {CreateUserDto} from "../../user/dto/create-user.dto";
// import {UserRepository} from "../user-repository";

export class PrismaUserRepository{
    constructor(private prisma: PrismaService) {}

    async create(user:CreateUserDto): Promise<void>{
        await this.prisma.user.create({
            data:{
                name : "",
                email : "",
                status: true,
            }
        })
    }
}