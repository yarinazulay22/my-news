import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/connect/connect/connect.entity';
import { UsersService } from 'src/users/users.service';
import { consumers } from 'stream';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
        private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
          const { password, ...result } = user;
          console.log(result)
          return result;
        }
        return null;
      }

      async login(user: User) {
        const payload = { username: user.userName, sub: user.id,};
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
