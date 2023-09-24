import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/database/entity/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private usersRepository:Repository<Users>){}


    getUsers():Promise<Users[]>{
        return this.usersRepository.find();
    }
}
