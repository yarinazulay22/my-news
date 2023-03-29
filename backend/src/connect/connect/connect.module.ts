import { Module } from '@nestjs/common';
import { ConnectService } from './connect.service';

@Module({
  imports: [
   
  ],
  providers: [ConnectService],
  exports: [ConnectService],
})
export class AuthModule {}