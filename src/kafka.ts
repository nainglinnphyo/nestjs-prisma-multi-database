import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestApplication } from '@nestjs/core';

export const initKafka = async (app: NestApplication) => {
  const configService = app.get(ConfigService);
  const kafkaBrokers: string[] = configService.get<string[]>('server.kafkaBrokers');
  const clientId: string = configService.get<string>('server.kafkaClient');
  const groupId: string = configService.get<string>('server.kafkaGroupId');
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: kafkaBrokers,
        clientId,
      },
      consumer: {
        groupId,
      },
    },
  });
  app.startAllMicroservices();
};
