import { People } from './people/entity/people.entity';
import { PeopleModule } from './people/people.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PeopleModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Cjb@2015',
      database: 'people',
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
