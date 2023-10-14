import { Injectable } from '@nestjs/common';
import { CreateUserTypeDto } from '../dto/create-user_type.dto';
import { UpdateUserTypeDto } from '../dto/update-user_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { UserType } from 'src/database/entity/user_types.entity';

@Injectable()
export class UserTypeService {
  constructor(@InjectRepository(UserType) private userTypeRepository:Repository<UserType>){
  }

  async create(createUserTypeDto: CreateUserTypeDto) {
    const userTypePartial = await this.mapAddUserTypeDtoToPartial(createUserTypeDto);
    var vehicleUseType = this.userTypeRepository.create(userTypePartial)
    return this.userTypeRepository.save(vehicleUseType);  
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

  async update(id: number, updateUserTypeDto: UpdateUserTypeDto) {
    var validUserType = await this.userTypeRepository.findOneBy({id})
    validUserType.userType = updateUserTypeDto.userType;
    return this.userTypeRepository.save(validUserType);
  }

  remove(id: number) {
    return this.userTypeRepository.delete(id);
  }

  async mapAddUserTypeDtoToPartial(addUserTypeDto: CreateUserTypeDto): Promise<DeepPartial<UserType>> {
    return {
      userType: addUserTypeDto.userType
    };
  }
}
