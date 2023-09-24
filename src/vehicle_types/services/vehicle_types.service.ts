import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValidVehicleType } from 'src/database/entity/valid_vehicle_types.entity';
import { Repository } from 'typeorm';
import { CreateVehicleTypeDto } from '../dto/create-vehicle_type.dto';
import { UpdateVehicleTypeDto } from '../dto/update-vehicle_type.dto';

@Injectable()
export class VehicleTypesService {
  constructor(@InjectRepository(ValidVehicleType) private vehicleTypeReporistory: Repository<ValidVehicleType>){}
  create(createVehicleTypeDto: CreateVehicleTypeDto) {
    return 'This action adds a new vehicleType';
  }

  findAll() {
    return this.vehicleTypeReporistory.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicleType`;
  }

  update(id: number, updateVehicleTypeDto: UpdateVehicleTypeDto) {
    return `This action updates a #${id} vehicleType`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleType`;
  }
}
