import { People } from './people/entity/people.entity';
import { PeopleModule } from './people/people.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PeopleModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'containers-us-west-39.railway.app',
    //   port: 5924,
    //   username: 'root',
    //   password: '6gMgvg9U6MWHmAKUA77M',
    //   database: 'railway',
    //   entities: [People],
    //   synchronize: true
    // })
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [People],
      synchronize: true
    })
  ],
  controllers: [
    AppController
  ],
  providers: [AppService
  ],
})
export class AppModule { }

// MYSQLDATABASE=railway
// MYSQLHOST=containers-us-west-39.railway.app
// MYSQLPASSWORD=6gMgvg9U6MWHmAKUA77M
// MYSQLPORT=5924
// MYSQLUSER=root
