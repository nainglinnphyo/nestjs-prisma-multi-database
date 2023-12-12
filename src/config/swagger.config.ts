import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerOptions = new DocumentBuilder()
  .setTitle('Fary V3 API')
  .setDescription('The API for Fary V3 API')
  .setVersion('3.0')
  .addBearerAuth()
  .build();
