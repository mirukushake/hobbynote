import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(4000);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const cors = {
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: ['Accept', 'Content-Type', 'Authorization'],
    Headers: ['‘Access-Control-Allow-Origin’'],
  };

  app.enableCors(cors);
  // app.useStaticAssets(join(__dirname, '..', 'public'));
}
bootstrap();
