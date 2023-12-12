/* eslint-disable sort-imports-es6-autofix/sort-imports-es6 */
/* eslint-disable import/no-relative-packages */
/* eslint-disable lines-between-class-members */
/* eslint-disable @typescript-eslint/lines-between-class-members */
import { Injectable } from '@nestjs/common';
import { PrismaClient as DriverPrismaClient } from '../../../prisma/client-one';
import { PrismaClient as UserPrismaClient } from '../../../prisma/client-two';

@Injectable()
export class PrismaService {
  user = new UserPrismaClient();
  driver = new DriverPrismaClient();
}
