import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeOrm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectController } from './connect/connect/connect.controller';
import { User } from './connect/connect/connect.entity';
import { ConnectService } from './connect/connect/connect.service';
import { NewsController } from './news/news/news.controller';
import { News } from './news/news/news.entity';
import { NewsService } from './news/news/news.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost', 
      port: 3306,
      username: 'root',
      password: '',
      database:'my-news' , 
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
      ],
      autoLoadEntities:true,
      synchronize: true,
      logging: false,
    }),
    TypeOrmModule.forFeature([News , User]),
    AuthModule,
    UsersModule
  ],
  controllers: [
    AppController,
    NewsController,
    ConnectController,

  ],
  providers: [
    AppService,
    NewsService,
    ConnectService,
    JwtService,
    UsersService,
  ],
})
export class AppModule {}
