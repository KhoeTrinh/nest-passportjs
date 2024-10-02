import {
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtGuard } from './guards/jwt.guard';

@Controller('users')
export class UsersController {
  @Get('/status')
  @UseGuards(JwtGuard)
  status(@Req() req: Request) {
    return req.user;
  }

  @Post('/login')
  @UseGuards(LocalGuard)
  @UsePipes(new ValidationPipe())
  token(@Req() req: Request) {
    return req.user;
  }
}
