import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin:'http://localhost:4200',
    methods:'GET, PUT, POST, DELETE, OPTIONS',
    credentials: true,
    allowedHeaders: 'content-type, Accept',
  });

  app.use(
    session({
      secret: 'my-secret',
      name: 'mySession',
      resave: false,
      saveUninitialized: false,
    }),
  );
  
  await app.listen(3001);
}
bootstrap();
