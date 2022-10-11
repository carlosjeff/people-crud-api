import { People } from './entity/people.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller'
import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([People])],
    controllers: [
        PeopleController,],
    providers: [
        PeopleService,],
})
export class PeopleModule { }
