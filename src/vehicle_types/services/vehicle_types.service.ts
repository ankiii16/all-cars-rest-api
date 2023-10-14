import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValidVehicleType } from 'src/database/entity/valid_vehicle_types.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CreateVehicleTypeDto } from '../dto/create-vehicle_type.dto';
import { UpdateVehicleTypeDto } from '../dto/update-vehicle_type.dto';

@Injectable()
export class VehicleTypesService {
  constructor(@InjectRepository(ValidVehicleType) private vehicleTypeReporistory: Repository<ValidVehicleType>){}
  
  async create(createVehicleTypeDto: CreateVehicleTypeDto) {
    var vehicleTypePartial = await this.mapAddVehicleTypeDtoToPartial(createVehicleTypeDto)
    var vehicleType = this.vehicleTypeReporistory.create(vehicleTypePartial)
    return this.vehicleTypeReporistory.save(vehicleType);
  }

  findAll() {
    return this.vehicleTypeReporistory.find();
  }

  findOne(id: number) {
    return this.vehicleTypeReporistory.findOneBy({id});
  }

  async update(id: number, updateVehicleTypeDto: UpdateVehicleTypeDto) {
    var validVehicleType = await this.vehicleTypeReporistory.findOneBy({id})
    validVehicleType.vehicleType = updateVehicleTypeDto.vehicleType
    return this.vehicleTypeReporistory.save(validVehicleType);
  }

  remove(id: number) {
    return this.vehicleTypeReporistory.delete({id});
  }

  async mapAddVehicleTypeDtoToPartial(addVehicleUseTypeDto: CreateVehicleTypeDto): Promise<DeepPartial<ValidVehicleType>> {
    return {
      vehicleType: addVehicleUseTypeDto.vehicleType
    };
  }
}
