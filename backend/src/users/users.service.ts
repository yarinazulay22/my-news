import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/connect/connect/connect.entity';
import { GetAllUsersResponse } from 'src/connect/connect/responses/get-all-users-response';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async getAll(): Promise<GetAllUsersResponse[]> {
    const users = await this.userRepository.find();
    const result = users.map(user => new GetAllUsersResponse(user));
    return result;
    
  }
  async findOne(userName: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { userName },
    });
  }
}
