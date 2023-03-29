import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/connect/connect/connect.entity';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports:[UsersService],
  imports:[TypeOrmModule.forFeature([User]),]
})
export class UsersModule {}
