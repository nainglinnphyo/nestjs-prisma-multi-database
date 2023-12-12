/* eslint-disable sort-imports-es6-autofix/sort-imports-es6 */
/* eslint-disable import/order */
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import configs from '@config/index';
import { PrismaModule } from '@shared/prisma/prisma.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
      expandVariables: true,
      validationSchema: Joi.object({
        PORT: Joi.number().default('3000').required(),
        KAFKA_BROKERS: Joi.string().default('localhost:9092').required(),
        KAFKA_CLIENT: Joi.string().default('localhost').required(),
        KAFKA_GROUP_ID: Joi.string().default('localhost').required(),
        USER_DATABASE_URL: Joi.string().required(),
        DRIVER_DATABASE_URL: Joi.string().required(),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
  ],
})
export class CommonModule {}
