/* eslint-disable sort-imports-es6-autofix/sort-imports-es6 */
import { ConfigService, registerAs } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
import { SERVER_NAME } from '@shared/enums';

const configService = new ConfigService();
export const AUTH_SERVICE = {
  name: SERVER_NAME.AUTH_SERVICE,
  transport: Transport.REDIS,
  options: {
    host: configService.get<string>('server.host.authServiceHost'),
    port: configService.get<string>('server.port.authServicePort'),
  },
};

export default registerAs(
  'server',
  (): Record<string, any> => ({
    kafkaBrokers: process.env.KAFKA_BROKERS ? process.env.KAFKA_BROKERS.split(',') : ['localhost:9092'],
    kafkaClient: process.env.KAFKA_CLIENT,
    kafkaGroupId: process.env.KAFKA_GROUP_ID,
  }),
);
