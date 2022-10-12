import { People } from './entity/people.entity';
import { CreatePeopleDto } from './dto/create-people.dto';
import { PeopleService } from './people.service';
import { BadRequestException, Body, Controller, Get, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { locationURL } from 'src/common/helpers/location-url.helper';
import { get } from 'http';

@Controller('pessoa')
export class PeopleController {

    constructor(private readonly peopleService: PeopleService) { }

    @Post()
    public async create(@Body() createDto: CreatePeopleDto,
                        @Res({ passthrough: true}) res: Response): Promise<People>{
        console.log(createDto) 
                            
        try {
            const people = await this.peopleService.create(createDto);
            res.status(HttpStatus.CREATED)
                .location(locationURL(res, people.id));
            return people;
        } catch (error) {
            console.log('error',error)
            throw new BadRequestException({
                statusCode: 404,
                message: 'Não foi possivel criar Pessoa!'
            });
        }
    }

    @Get(':id')
    public async getById(@Param('id', ParseIntPipe) id: number,
                         @Res({ passthrough: true}) res: Response) {
       return new Date(1998,8 - 1,15);

        const people = await this.peopleService.getById(id);

        if(!people){
            throw new NotFoundException({
                statusCode: 404,
                message: 'Não foi encontardo nenhum Pessoa!'
              });
        }

        res.status(HttpStatus.OK)
       return people;
    }
}
