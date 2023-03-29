import { Injectable } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { SESSION } from 'src/app.controller';
import { Repository,FindOneOptions } from 'typeorm';
import { User } from './connect.entity';
import { Register } from './connect.interface';

@Injectable()
export class ConnectService {
  
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  
  /*async register(item: Register) {
    throw new Error('Method not implemented.');
  }

   @Get()
  async getUser() {
    return await this.userRepository.find();
  }

  async validateUser(username: string, password: string): Promise<any> {
    const opt :FindOneOptions = {where:[username]}

    const user = await this.userRepository.findOne(opt);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return user;
    }
    return null;
  }

 

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  } */

  async register(item: Register) {
    const obj = this.userRepository.create(item);
    return await this.userRepository.save(obj)
  }
  async login(userName: string, password: string) {
    const user = await this.userRepository.findOne({ where: { userName } });
    if (!user) {
      throw new HttpException(' שם משתמש וסיסמא שגויים', HttpStatus.BAD_REQUEST,);
      
    }

    if(!(await user.comparePassword(password))) {
      throw new HttpException('שם משתמש וסיסמא שגויים', HttpStatus.BAD_REQUEST)
    }
    SESSION.user = user
    return user;
  }


}