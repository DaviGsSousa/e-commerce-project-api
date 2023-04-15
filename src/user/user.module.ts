import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {PrismaService} from "../database/prisma.service";
import {UserRepository} from "../repository/user-repository";
import {PrismaUserRepository} from "../repository/prisma/prisma-user-repository";

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, {provide: UserRepository, useClass: PrismaUserRepository}]
})
export class UserModule {}
