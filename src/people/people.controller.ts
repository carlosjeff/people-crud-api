import { UpdatePeopleDto } from './dto/update-people.dto';
import { People } from './entity/people.entity';
import { CreatePeopleDto } from './dto/create-people.dto';
import { PeopleService } from './people.service';
import { Body, Controller, Delete, Get, HttpStatus,
         InternalServerErrorException, NotFoundException, 
         Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { locationURL } from 'src/common/functions/location-url';


@Controller()
export class PeopleController {

    constructor(private readonly peopleService: PeopleService) { }

    @Post('pessoa')
    public async create(@Body() createDto: CreatePeopleDto,
        @Res({ passthrough: true }) res: Response): Promise<People> {

        try {
            const people = await this.peopleService.create(createDto);
            res.status(HttpStatus.CREATED)
                .location(locationURL(res, people.id));
            return people;
        } catch (error) {
            throw new InternalServerErrorException({
                statusCode: 500,
                message: 'Não foi possivel Criar Pessoa!'
            });
        }
    }

    @Get('pessoa/:id')
    public async getById(@Param('id', ParseIntPipe) id: number,
        @Res({ passthrough: true }) res: Response): Promise<People> {

        const people = await this.peopleService.getById(id);

        if (!people) {
            throw new NotFoundException({
                statusCode: 404,
                message: 'Não foi encontardo nenhum Pessoa!'
            });
        }

        res.status(HttpStatus.OK)
        return people;
    }

    @Get('pessoas')
    public async getAll(): Promise<People[]> {

        return this.peopleService.getAll();
    }

    @Put('pessoa/:id')
    public async update(@Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdatePeopleDto,
        @Res({ passthrough: true }) res: Response): Promise<People> {


        if (!(await this.peopleService.getById(id))) {
            throw new NotFoundException({
                statusCode: 404,
                message: 'Não foi encontardo nenhum pessoa com o Id informado!'
            })
        }
        try {

            const people = await this.peopleService.update(id, updateDto);
            res.status(HttpStatus.OK)
                .location(locationURL(res, id));
            return people;

        } catch (error) {
            throw new InternalServerErrorException({
                statusCode: 500,
                message: 'Não foi possivel atualizar Pessoa!'
            });
        }
    }

    @Delete('pessoa/:id')
    public async delete(@Param('id', ParseIntPipe) id: number,
        @Res({ passthrough: true }) res: Response,): Promise<String> {


        if (!(await this.peopleService.getById(id))) {
            throw new NotFoundException({
                statusCode: 404,
                message: 'Não foi encontardo nenhum pessoa com o Id informado!'
            })
        }
        const peopleDelete = await this.peopleService.delete(id);

        if (peopleDelete.affected == 0) {
            throw new InternalServerErrorException({
                statusCode: 500,
                message: 'Não foi possivel apagar o registro!'
            });;
        }
        res.status(HttpStatus.OK)
        return 'Pessoa foi removida com sucesso!';

    }

}
