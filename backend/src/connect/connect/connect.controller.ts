import { Controller } from '@nestjs/common';
import { Body, Get, Post, Req, UseGuards } from '@nestjs/common/decorators';
import { AppService } from 'src/app.service';
import { Login, Register } from './connect.interface';

import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { GetAllUsersResponse } from './responses/get-all-users-response';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SESSION } from 'src/app.controller';
import { ConnectService } from './connect.service';


@Controller('connect')
export class ConnectController {
  /* @UseGuards(JwtAuthGuard)
  @Get('getUser')
  async getUser():Promise<GetAllUsersResponse[]> {
    return await this.usersService.getAll();
  } */

  @Get('logout') logout(@Req() req: Request) {
     req.session.destroy((err) => {
       console.log(err);
     });
  }

  @Get('login-status')
  async status() {
     if (SESSION.user) {
       return {
         status: 'loggedin',
         user: SESSION.user,
       };
     } else {
       return { status: 'error', message: 'משתמש לא מחובר' };
     }
  }

  @Post('login')
  async login(@Body() item: Login) {
    debugger;
    return await this.connectService.login(item.userName, item.password);
  }

  @Post('register')
  async register(@Body() item: Register) {
    return await this.connectService.register(item);
  }

  


  /* @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() item: Register) {
    // return await this.ConnectService.register(item);
  } */

  constructor(
    private authService: AuthService,
    private connectService: ConnectService,
    private readonly usersService:UsersService,
  ) {}
}
