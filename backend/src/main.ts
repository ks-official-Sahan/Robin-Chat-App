import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 8000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port).then(()=>{
    console.log("App started listening on port: "+ port);
  });
}
bootstrap();
