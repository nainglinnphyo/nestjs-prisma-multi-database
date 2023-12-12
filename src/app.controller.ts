/* eslint-disable import/order */
/* eslint-disable max-classes-per-file */
/* eslint-disable sort-imports-es6-autofix/sort-imports-es6 */
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { IResponsePaging } from '@core/interfaces/response.interface';
import { AppService } from './app.service';
import { PrismaService } from '@shared/prisma/prisma.service';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { BadRequestException } from '@core/exceptions';

@ApiTags('Health-check')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService,
  ) {}

  @MessagePattern('get.user')
  async getHello(@Payload() message: { num: number }) {
    console.log(message);
    return message;
  }
}
