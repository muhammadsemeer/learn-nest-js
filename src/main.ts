import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get('PORT') || 3000;
  const nodeEnv = config.get('NODE_ENV') || 'development';
  await app.listen(port);
  Logger.log(
    `Server running on http://localhost:${port} in ${nodeEnv} mode`,
    'Bootstrap',
  );
}

bootstrap();
