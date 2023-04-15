import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {ValidationPipe} from "@nestjs/common";
import {UserModule} from "./user/user.module";

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
