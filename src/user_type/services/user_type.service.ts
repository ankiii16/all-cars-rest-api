import { Injectable } from '@nestjs/common';
import { CreateUserTypeDto } from '../dto/create-user_type.dto';
import { UpdateUserTypeDto } from '../dto/update-user_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserType } from 'src/database/entity/user_types.entity';

@Injectable()
export class UserTypeService {
  constructor(@InjectRepository(UserType) private userTypeRepository:Repository<UserType>){
  }

  create(createUserTypeDto: CreateUserTypeDto) {
    return "test"
  }

  findAll() {
    return this.userTypeRepository.find();
  }

  findOne(id: number) {
    return this.userTypeRepository
            .createQueryBuilder('user_type')
            .where('user_type.id = :id', { id: UserType })
            .getMany();
  }

  update(id: number, updateUserTypeDto: UpdateUserTypeDto) {
    return `This action updates a #${id} userType`;
  }

  remove(id: number) {
    return `This action removes a #${id} userType`;
  }
}
