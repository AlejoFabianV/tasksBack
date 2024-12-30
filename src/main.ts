import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Tasks API')
  .build();
  const documentFactory = SwaggerModule.createDocument(app, config);;
  SwaggerModule.setup('api/swagger', app, documentFactory);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(5000);
}
bootstrap();
