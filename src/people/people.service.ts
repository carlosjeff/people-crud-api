import { UpdatePeopleDto } from './dto/update-people.dto';
import { CreatePeopleDto } from './dto/create-people.dto';
import { People } from './entity/people.entity';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class PeopleService {

    constructor(@InjectRepository(People) private peopleRepository: Repository<People>) { }

    public async create(createDto: CreatePeopleDto): Promise<People>{ 
        
        return await this.peopleRepository.save(createDto); 
    }

    public async getAll(): Promise<People[]> { 
        
        return await this.peopleRepository.find(); 
    }

    public async getById(id: number): Promise<People> { 
        
        return await this.peopleRepository.findOneBy({id}); 
    }

    public async update(id: number, updateDto: UpdatePeopleDto): Promise<People> { 
        
        return await this.peopleRepository.save({id: id, ...updateDto }); 
    }
    
    public async delete(id: number): Promise<DeleteResult> { 
        
        return await this.peopleRepository.delete(id); 
    }
    
 }
